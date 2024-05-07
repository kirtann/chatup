import express from "express";
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import { createServer } from "http";
import { v4 as uuid } from "uuid";

import userRoute from "./routes/userRoute.js";
import chatRoute from "./routes/chatRoute.js";
import adminRoute from "./routes/adminRoute.js";
import { NEW_MESSAGE, NEW_MESSAGE_ALERT } from "./constants/events.js";
import { getSockets } from "./lib/helper.js";
import { Message } from "./models/messageModel.js";

dotenv.config({
  path: "./.env",
});

const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 4000;
const mode = process.env.NODE_ENV.trim() || "PRODUCTION";
const userSocketIDs = new Map();

connectDB(mongoURI);

const app = express();
const server = createServer(app);
const io = new Server(server, {});

// Using Middlewares Here
app.use(express.json());
app.use(cookieParser());

app.use("/user", userRoute);
app.use("/chat", chatRoute);
app.use("/admin", adminRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

io.use((socket, next) => {});

io.on("connection", (socket) => {
  const user = {
    _id: "aslfj",
    name: "User",
  };
  userSocketIDs.set(user._id.toString(), socket.id);

  socket.on(NEW_MESSAGE, async ({ chatId, members, message }) => {
    const messageForReadTime = {
      content: message,
      _id: uuid(),
      sender: {
        _id: user._id,
        name: user.name,
      },
      chat: chatId,
      createdAt: new Date().toISOString(),
    };

    const messageForDB = {
      content: message,
      sender: user._id,
      chat: chatId,
    };

    const membersSocket = getSockets(members);
    io.to(membersSocket).emit(NEW_MESSAGE, {
      chatId,
      message: messageForReadTime,
    });

    io.to(membersSocket).emit(NEW_MESSAGE_ALERT, {
      chatId,
    });

    try {
      await Message.create(messageForDB);
    } catch (error) {
      console.log(error);
    }
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected");
    userSocketIDs.delete(user._id.toString());
  });
});

app.use(errorMiddleware);

server.listen(port, () => {
  console.log(`Server is running on port ${port} in ${mode} mode`);
});

export { mode, userSocketIDs };

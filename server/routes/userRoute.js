import express from "express";
import {
  acceptRequest,
  getMyProfile,
  getNotifications,
  login,
  logout,
  newUser,
  searchUser,
  sendRequest,
} from "../controllers/userController.js";
import { singleAvatar } from "../middlewares/multer.js";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  acceptRequestValidator,
  loginValidator,
  registerValidator,
  sendRequestValidator,
  validateHandler,
} from "../lib/validators.js";

const app = express.Router();

app.post("/new", singleAvatar, registerValidator(), validateHandler, newUser);
app.post("/login", loginValidator(), validateHandler, login);

// For below routes the user must be logged in to access the routes

app.use(isAuthenticated);

app.get("/me", getMyProfile);

app.get("/logout", logout);

app.get("/search", searchUser);

app.put("/sendrequest", sendRequestValidator(), validateHandler, sendRequest);

app.put(
  "/acceptrequest",
  acceptRequestValidator(),
  validateHandler,
  acceptRequest
);

app.get("/notifications", getNotifications);

export default app;

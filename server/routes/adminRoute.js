import express from "express";
import {
  getAllChats,
  getAllMessages,
  getAllUsers,
  getDashboardStats,
} from "../controllers/adminController.js";

const app = express.Router();

app.get("/");

app.get("/verify");

app.get("/logout");

app.get("/users", getAllUsers);
app.get("/chats", getAllChats);
app.get("/messages", getAllMessages);

app.get("/stats", getDashboardStats);

export default app;

import express from "express";
import {
  adminLogin,
  adminLogout,
  getAdminData,
  getAllChats,
  getAllMessages,
  getAllUsers,
  getDashboardStats,
} from "../controllers/adminController.js";
import { adminLoginValidator, validateHandler } from "../lib/validators.js";
import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();

app.post("/verify", adminLoginValidator(), validateHandler, adminLogin);

app.get("/logout", adminLogout);

// Protect all routes below this middleware
app.use(adminOnly);

app.get("/", getAdminData);

app.get("/users", getAllUsers);
app.get("/chats", getAllChats);
app.get("/messages", getAllMessages);

app.get("/stats", getDashboardStats);

export default app;

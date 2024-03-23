import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { newGroupChat } from "../controllers/chatController.js";

const app = express.Router();

// For below routes the user must be logged in to access the routes

app.use(isAuthenticated);

app.post("/new", newGroupChat);

export default app;

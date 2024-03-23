import express from "express";
import { getMyProfile, login, newUser } from "../controllers/userController.js";
import { singleAvatar } from "../middlewares/multer.js";
import { isAuthenticated } from "../middlewares/auth.js";

const app = express.Router();

app.post("/new", singleAvatar, newUser);
app.post("/login", login);

// For below routes the user must be logged in to access the routes
app.get("/me", isAuthenticated, getMyProfile);

export default app;

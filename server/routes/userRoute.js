import express from "express";
import { login, newUser } from "../controllers/userController.js";

const app = express.Router();

app.post("/new", newUser);
app.get("/login", login);

export default app;

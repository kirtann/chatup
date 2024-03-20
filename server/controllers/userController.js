import { User } from "../models/userModel.js";

const newUser = async (req, res) => {
  await User.create(req.body);

  res.status(201).json({ message: "User created" });
};

const login = (req, res) => {
  res.send("Hello World");
};
export { login, newUser };

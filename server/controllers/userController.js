import { compare } from "bcrypt";
import { User } from "../models/userModel.js";
import { cookieOptions, sendToken } from "../utils/features.js";
import { tryCatch } from "../middlewares/error.js";
import { ErrorHandler } from "../utils/utility.js";

const newUser = async (req, res) => {
  const { name, username, password, bio } = req.body;

  const avatar = {
    public_id: "sfjs",
    url: "sajfl",
  };

  const user = await User.create({
    name,
    bio,
    username,
    password,
    avatar,
  });

  sendToken(res, user, 201, "User created");
};

// Login User
const login = tryCatch(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Username Or Password", 404));
  }

  const isMatch = await compare(password, user.password);

  if (!isMatch) {
    return next(new ErrorHandler("Invalid Username Or Password", 404));
  }

  sendToken(res, user, 200, `Welcome Back, ${user.name}`);
});

const getMyProfile = tryCatch(async (req, res) => {
  const user = await User.findById(req.userId);

  res.status(200).json({
    success: true,
    user,
  });
});

const logout = tryCatch(async (req, res) => {
  return res
    .status(200)
    .cookie("auth-token", "", {
      ...cookieOptions,
      maxAge: 0,
    })
    .json({
      success: true,
      message: "Logged out successfully",
    });
});

const searchUser = tryCatch(async (req, res) => {
  const { name } = req.query;

  return res.status(200).json({
    success: true,
    message: name,
  });
});

export { login, newUser, getMyProfile, logout, searchUser };

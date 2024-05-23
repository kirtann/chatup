import { ErrorHandler } from "../utils/utility.js";
import jwt from "jsonwebtoken";
import { tryCatch } from "./error.js";
import { AUTH_TOKEN } from "../constants/config.js";
import { User } from "../models/userModel.js";

const isAuthenticated = tryCatch((req, res, next) => {
  const token = req.cookies[AUTH_TOKEN];

  if (!token)
    return next(new ErrorHandler("Please login to access this route", 401));

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.userId = decodedData._id;

  next();
});

const adminOnly = (req, res, next) => {
  const token = req.cookies["chatup-admin-token"];

  if (!token)
    return next(new ErrorHandler("Only Admin can access this route", 401));

  const secretKey = jwt.verify(token, process.env.JWT_SECRET);

  const adminSecretKey = process.env.ADMIN_SECRET_KEY || "admin1234";

  const isMatched = secretKey === adminSecretKey;

  if (!isMatched)
    return next(new ErrorHandler("Only Admin can access this route", 401));

  next();
};

const socketAuthenticator = async (err, socket, next) => {
  try {
    if (err) return next(err);

    const authToken = socket.request.cookies[AUTH_TOKEN];

    if (!authToken)
      return next(new ErrorHandler("Please login to access this route", 401));

    const decodedData = jwt.verify(authToken, process.env.JWT_SECRET);

    const user = await User.findById(decodedData._id);

    if (!user)
      return next(new ErrorHandler("Please login to access this route", 401));

    socket.user = user;

    return next();
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler("Please login to access this route", 401));
  }
};

export { isAuthenticated, adminOnly, socketAuthenticator };

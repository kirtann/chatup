import { ErrorHandler } from "../utils/utility.js";
import { tryCatch } from "./error.js";
import jwt from "jsonwebtoken";

const isAuthenticated = tryCatch(async (req, res, next) => {
  const token = req.cookies["auth-token"];

  if (!token)
    return next(new ErrorHandler("Please login to access this route", 401));

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decodedData);
  next();
});

export { isAuthenticated };

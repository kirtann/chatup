import { body, validationResult, check } from "express-validator";
import { ErrorHandler } from "../utils/utility.js";

const registerValidator = () => [
  body("name", "Please Enter Name").notEmpty(),
  body("username", "Please Enter Username").notEmpty(),
  body("bio", "Please Enter Bio").notEmpty(),
  body("password", "Please Enter Password").notEmpty(),
  body("password", "Password must be at least 8 characters").isLength({
    min: 8,
  }),
  check("avatar", "Please upload an avatar").notEmpty(),
];

const loginValidator = () => [
  body("username", "Please Enter Username").notEmpty(),
  body("password", "Please Enter Password").notEmpty(),
];

const validateHandler = (req, res, next) => {
  const errors = validationResult(req);

  let errorMessages = errors.array().map((error) => error.msg);

  if (errorMessages.includes("Please Enter Password")) {
    errorMessages.splice(
      errorMessages.indexOf("Password must be at least 8 characters"),
      1
    );
  }

  errorMessages = errorMessages.join(", ");

  if (errors.isEmpty()) return next();
  else next(new ErrorHandler(errorMessages, 400));
};

export { registerValidator, validateHandler, loginValidator };

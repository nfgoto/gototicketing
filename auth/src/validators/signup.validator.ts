import { body } from "express-validator";
import { FIELDS } from "./fields.enum";

export const signupValidators = [
  body(FIELDS.EMAIL).isEmail().withMessage("Email must be valid"),
  body(FIELDS.PASSWORD)
    .trim()
    .isLength({ max: 20, min: 8 })
    .withMessage("Password must be between 8 and 20 characters"),
];

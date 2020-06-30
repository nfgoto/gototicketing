import { body } from "express-validator";
import { FIELDS } from "./fields.enum";

export const signinValidators = [
  body(FIELDS.EMAIL).isEmail().withMessage("Email must be valid"),
  body(FIELDS.PASSWORD)
    .trim()
    .notEmpty()
    .withMessage("Password must be supplied"),
];

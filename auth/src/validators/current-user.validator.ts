import { body } from "express-validator";
import { FIELDS } from "./fields.enum";

export const currentUserValidators = [
  body(FIELDS.EMAIL).isEmail().withMessage("Please enter a valid"),
  body(FIELDS.PASSWORD)
    .trim()
    .isLength({ max: 20, min: 8 })
    .withMessage("Please enter a password between 8 and 20 characters"),
];

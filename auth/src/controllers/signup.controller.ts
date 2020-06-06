import express from "express";
import { validationResult } from "express-validator";
import { Errors } from "../types";

const postSignup = async (req: express.Request, res: express.Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new Errors.RequestValidationError(errors.array());
  }

  const { email, password } = req.body;
  throw new Errors.DatabaseConnectionError();

  res.json({
    message: `User ${email} with password ${password} created`,
  });
};

const signupHandlers = {
  postSignup,
};

export { signupHandlers };

import express from "express";
import { validationResult } from "express-validator";
import { Errors } from "../types";
import { User } from "../models";
import { BadRequestError } from "../types/errors";

const postSignup = async (req: express.Request, res: express.Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new Errors.RequestValidationError(errors.array());
  }

  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new BadRequestError("Email already in use");
  }

  const user = User.build({ email, password });

  await user.save();

  res.status(201).json({
    data: user,
  });
};

const signupHandlers = {
  postSignup,
};

export { signupHandlers };

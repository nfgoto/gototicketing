import express from "express";
import { validationResult } from "express-validator";
import { Errors } from "../types";
import { User } from "../models";

const postSignup = async (req: express.Request, res: express.Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new Errors.RequestValidationError(errors.array());
  }

  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.json({
      message: "Email already exist",
    });
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

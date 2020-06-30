import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../models";
import { BadRequestError } from "../types/errors";

const postSignup = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new BadRequestError("Email already in use");
  }

  const user = User.build({ email, password });

  await user.save();

  // generate JWT
  const userJwt = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_KEY!
  );

  // sotre JWT on session object
  req.session = {
    jwt: userJwt,
  };

  res.status(201).json({
    data: user,
  });
};

const signupHandlers = {
  postSignup,
};

export { signupHandlers };

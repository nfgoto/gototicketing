import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../models";
import { Errors } from "../types";
import { PasswordService } from "../services";

const postSignin = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    throw new Errors.BadRequestError("Invalid credentials");
  }

  const passwordMatch = await PasswordService.compare(
    existingUser.password,
    password
  );

  if (!passwordMatch) {
    throw new Errors.BadRequestError("Invalid credentials");
  }

  // generate JWT
  const userJwt = jwt.sign(
    {
      id: existingUser.id,
      email: existingUser.email,
    },
    process.env.JWT_KEY!
  );

  // sotre JWT on session object
  req.session = {
    jwt: userJwt,
  };

  res.json({
    data: existingUser,
  });
};

const signinHandlers = {
  postSignin,
};

export { signinHandlers };

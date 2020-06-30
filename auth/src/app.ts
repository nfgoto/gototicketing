import express from "express";
import mongoose from "mongoose";
import cookieSession from "cookie-session";
import {
  currentUserRouter,
  signupRouter,
  signinRouter,
  signoutRouter,
} from "./routes/";
import { expressCustomErrorHandler, asyncErrorHandler } from "./middlewares";
import { NotFoundError } from "./types/errors";

const app = express();
// traffic proxied through ingress-nginx, consider that prixied traffic as trusted
app.set("trust proxy", true);

app.use(express.json());
app.use(
  cookieSession({
    // disable encryption of cookie content
    signed: false,
    // make sure that cookies are used only on HTTPS connection when not in test environment
    secure: process.env.NODE_ENV !== "test",
  })
);
app.use([currentUserRouter, signupRouter, signinRouter, signoutRouter]);

// not found handler
app.all(
  "*",
  asyncErrorHandler(async (req, res, next) => {
    next(new NotFoundError());
  })
);

app.use(expressCustomErrorHandler);

export { app };

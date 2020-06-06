import express from "express";
import mongoose from "mongoose";
import {
  currentUserRouter,
  signupRouter,
  signinRouter,
  signoutRouter,
} from "./routes/";
import { expressCustomErrorHandler, asyncErrorHandler } from "./middlewares";
import { NotFoundError } from "./types/errors";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use([currentUserRouter, signupRouter, signinRouter, signoutRouter]);

// not found handler
app.all(
  "*",
  asyncErrorHandler(async (req, res, next) => {
    next(new NotFoundError());
  })
);

app.use(expressCustomErrorHandler);

const start = async () => {
  console.log(`updatesd ${new Date().toISOString()}`);
  try {
    await mongoose.connect("mongodb://auth-mongo-clusterip-svc:27017/auth", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Auth service connected to MongoDB");
  } catch (error) {
    console.error(error);
  }

  app.listen(PORT, () => {
    console.log(`Auth service listening on port ${PORT}`);
  });
};

start();

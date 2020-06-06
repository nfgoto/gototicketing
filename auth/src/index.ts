import express from "express";
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

app.listen(PORT, () => {
  console.log(`updatesd ${new Date().toISOString()}`);

  console.log(`Auth service listening on port ${PORT}`);
});

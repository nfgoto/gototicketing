import { Request, Response, NextFunction } from "express";
import { Errors } from "../types";

export const AuthRequireMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    throw new Errors.NotAuthorizedError();
  }

  next();
};

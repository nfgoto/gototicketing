import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { Errors } from "../types";

export const RequestValidateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new Errors.RequestValidationError(errors.array());
  }

  next();
};

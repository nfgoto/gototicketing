import { Request, Response, NextFunction } from "express";
import { Errors } from "../types";

export const expressCustomErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof Errors.CustomError) {
    return res.status(err.statusCode).json({
      errors: err.serializeErrors(),
    });
  }

  res.status(500).json({
    errors: [
      {
        message: err.message,
      },
    ],
  });
};

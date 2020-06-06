import { Request, Response, NextFunction, RequestHandler } from "express";

export const asyncErrorHandler = (fn: RequestHandler) => (
  req: Request,
  res: Response,
  next: NextFunction
) => fn(req, res, next).catch(next);

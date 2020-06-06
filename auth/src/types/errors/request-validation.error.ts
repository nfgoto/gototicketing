import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error.error";

export class RequestValidationError extends CustomError {
  public readonly statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super("Invalid request parameters");

    // because we are extending a built-in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  public serializeErrors() {
    const formattedErrors = this.errors.map((error) => ({
      message: error.msg,
      field: error.param,
    }));

    return formattedErrors;
  }
}

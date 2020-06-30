import { CustomError } from "./custom-error.error";

export class NotAuthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super("Not authorizzed");

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: "Not authorizzed",
      },
    ];
  }
}

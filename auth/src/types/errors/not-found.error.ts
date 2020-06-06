import { CustomError } from "./custom-error.error";

export class NotFoundError extends CustomError {
  public readonly statusCode = 404;

  constructor() {
    super("Route not found");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  public serializeErrors() {
    return [
      {
        message: "Not found",
      },
    ];
  }
}

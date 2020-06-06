import { CustomError } from "./custom-error.error";

export class DatabaseConnectionError extends CustomError {
  public readonly statusCode = 500;
  reason = "Error connecting to database";

  constructor() {
    super("Error connecting to database");

    // because we are extending a built-in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  public serializeErrors() {
    const formattedErrors = [
      {
        message: this.reason,
      },
    ];

    return formattedErrors;
  }
}

import { CustomError } from "./custom-error.error";

export class BadRequestError extends CustomError {
  public readonly statusCode = 400;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  public serializeErrors() {
    return [
      {
        message: this.message,
      },
    ];
  }
}

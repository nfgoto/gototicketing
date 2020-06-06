export abstract class CustomError extends Error {
  public abstract readonly statusCode: number;

  constructor(message: string) {
    // pass default message to Error for logging purposes
    super(message);

    // because we are extending a built-in class
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  public abstract serializeErrors(): { message: string; field?: string }[];
}

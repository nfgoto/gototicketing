import { Router } from "express";
import { ROUTES } from "./routes.enum";
import { signinHandlers } from "../controllers";
import { asyncErrorHandler, RequestValidateMiddleware } from "../middlewares";
import { signinValidators } from "../validators";

const router = Router();

/**
 * @route POST /api/users/signin
 */
router.post(
  `${ROUTES.API_ROOT_USERS}/signin`,
  signinValidators,
  RequestValidateMiddleware,
  asyncErrorHandler(signinHandlers.postSignin)
);

export { router as signinRouter };

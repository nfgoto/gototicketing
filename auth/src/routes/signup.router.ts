import { Router } from "express";
import { ROUTES } from "./routes.enum";
import { signupHandlers } from "../controllers";
import { signupValidators } from "../validators";
import { asyncErrorHandler, RequestValidateMiddleware } from "../middlewares";

const router = Router();

/**
 * @route POST /api/users/signup
 */
router.post(
  `${ROUTES.API_ROOT_USERS}/signup`,
  signupValidators,
  RequestValidateMiddleware,
  asyncErrorHandler(signupHandlers.postSignup)
);

export { router as signupRouter };

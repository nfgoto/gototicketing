import { Router } from "express";
import { ROUTES } from "./routes.enum";
import { signupHandlers } from "../controllers";
import { currentUserValidators } from "../validators";
import { asyncErrorHandler } from "../middlewares";

const router = Router();

/**
 * @route POST /api/users/signup
 */
router.post(
  `${ROUTES.USERS}/signup`,
  currentUserValidators,
  asyncErrorHandler(signupHandlers.postSignup)
);

export { router as signupRouter };

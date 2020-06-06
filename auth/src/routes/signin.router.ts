import { Router } from "express";
import { ROUTES } from "./routes.enum";
import { signinHandlers } from "../controllers";
import { asyncErrorHandler } from "../middlewares";

const router = Router();

/**
 * @route POST /api/users/signin
 */
router.post(
  `${ROUTES.USERS}/signin`,
  asyncErrorHandler(signinHandlers.postSignin)
);

export { router as signinRouter };

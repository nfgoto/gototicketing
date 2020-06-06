import { Router } from "express";
import { ROUTES } from "./routes.enum";
import { signoutHandlers } from "../controllers";
import { asyncErrorHandler } from "../middlewares";

const router = Router();

/**
 * @route POST /api/users/signout
 */
router.post(
  `${ROUTES.USERS}/signout`,
  asyncErrorHandler(signoutHandlers.postSignout)
);

export { router as signoutRouter };

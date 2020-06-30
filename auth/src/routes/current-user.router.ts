import { Router } from "express";
import { ROUTES } from "./routes.enum";
import { currentUserHandlers } from "../controllers";
import { asyncErrorHandler } from "../middlewares";
import { CurrentUserMiddleware } from "../middlewares/current-user.middleware";

const router = Router();

/**
 * @route GET /api/users/currentuser
 */
router.get(
  `${ROUTES.API_ROOT_USERS}/currentuser`,
  CurrentUserMiddleware,
  asyncErrorHandler(currentUserHandlers.getCurrentUser)
);

export { router as currentUserRouter };

import { Router } from "express";
import { ROUTES } from "./routes.enum";
import { currentUserHandlers } from "../controllers";
import { asyncErrorHandler } from "../middlewares";

const router = Router();

/**
 * @route GET /api/users/currentuser
 */
router.get(
  `${ROUTES.USERS}/currentuser`,
  asyncErrorHandler(currentUserHandlers.getCurrentUser)
);

export { router as currentUserRouter };

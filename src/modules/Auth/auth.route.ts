import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { AuthValidation } from "./auth.validation";
import { authController } from "./auth.controller";

const router = Router();

router.post(
  "/login",
  validateRequest(AuthValidation.loginUserValidationSchema),
  authController.loginUser
);

export const authRoutes = router;

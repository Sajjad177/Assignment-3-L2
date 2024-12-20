import { Router } from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middleware/validateRequest";
import { UserValidation } from "./user.validation";

const router = Router();

router.post(
  "/register",
  validateRequest(UserValidation.userValidationSchema),
  userController.registerUser
);

export const userRoutes = router;

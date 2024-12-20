import { Router } from "express";
import { adminController } from "./admin.controller";
import validateRequest from "../../middleware/validateRequest";
import { UserValidation } from "../User/user.validation";

const router = Router();

router.patch(
  "/users/:userId/block",
  validateRequest(UserValidation.updateUserValidationSchema),
  adminController.blockUser
);

router.delete("/blogs/:id", adminController.deleteBlogs);

export const adminRoutes = router;

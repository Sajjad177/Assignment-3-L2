import { Router } from "express";
import { adminController } from "./admin.controller";
import validateRequest from "../../middleware/validateRequest";
import { UserValidation } from "../User/user.validation";
import auth from "../../middleware/auth";
import { USER_ROLES } from "../User/user.constant";
import { TUserRole } from "../User/user.interface";

const router = Router();

router.patch(
  "/users/:userId/block",
  validateRequest(UserValidation.updateUserValidationSchema),
  adminController.blockUser
);

router.delete(
  "/blogs/:id",
  auth(USER_ROLES.admin as TUserRole),
  adminController.deleteBlogs
);

export const adminRoutes = router;

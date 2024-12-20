import { Router } from "express";
import { BlogController } from "./blog.controller";
import validateRequest from "../../middleware/validateRequest";
import { BlogValidation } from "./blog.validation";
import auth from "../../middleware/auth";
import { USER_ROLES } from "../User/user.constant";
import { TUserRole } from "../User/user.interface";

const router = Router();

router.post(
  "/",
  auth(USER_ROLES.user as TUserRole),
  validateRequest(BlogValidation.createBlogValidattion),
  BlogController.createBlog
);

router.get("/", BlogController.getAllBlog);

router.patch(
  "/:id",
  auth(USER_ROLES.user as TUserRole),
  validateRequest(BlogValidation.updateBlogValidation),
  BlogController.updateBlog
);

router.delete(
  "/:id",
  auth(USER_ROLES.user as TUserRole),
  BlogController.deleteBlog
);

export const BlogRoute = router;

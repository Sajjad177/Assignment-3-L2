import { Router } from "express";
import { BlogController } from "./blog.controller";
import validateRequest from "../../middleware/validateRequest";
import { BlogValidation } from "./blog.validation";

const router = Router();

router.post(
  "/",
  validateRequest(BlogValidation.createBlogValidattion),
  BlogController.createBlog
);

router.patch(
  "/:id",
  validateRequest(BlogValidation.updateBlogValidation),
  BlogController.updateBlog
);

export const BlogRoute = router;

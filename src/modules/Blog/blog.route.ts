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

router.get("/", BlogController.getAllBlog);

router.patch(
  "/:id",
  validateRequest(BlogValidation.updateBlogValidation),
  BlogController.updateBlog
);

router.delete("/:id", BlogController.deleteBlog);

export const BlogRoute = router;

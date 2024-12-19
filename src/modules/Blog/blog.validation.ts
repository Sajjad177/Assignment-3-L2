import { z } from "zod";

const createBlogValidattion = z.object({
  body: z.object({
    title: z.string({ required_error: "title is required" }),
    description: z.string({ required_error: "description is required" }),
    author: z.string({ required_error: "author is required" }),
    isPublished: z.boolean().optional(),
  }),
});

export const BlogValidation = {
  createBlogValidattion,
};

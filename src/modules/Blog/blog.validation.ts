import { z } from "zod";

const createBlogValidattion = z.object({
  body: z.object({
    title: z.string({ required_error: "title is required" }),
    content: z.string({ required_error: "content is required" }),
    author: z.string({ required_error: "author is required" }),
    isPublished: z.boolean().optional(),
  }),
});

export const BlogValidation = {
  createBlogValidattion,
};

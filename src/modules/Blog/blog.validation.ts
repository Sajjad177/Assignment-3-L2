import { z } from "zod";

const createBlogValidattion = z.object({
  body: z.object({
    title: z.string({ required_error: "title is required" }),
    content: z.string({ required_error: "content is required" }),
    author: z.string({ required_error: "author is required" }),
    isPublished: z.boolean().optional(),
  }),
});

const updateBlogValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    author: z.string().optional(),
    isPublished: z.boolean().optional(),
  }),
});

export const BlogValidation = {
  createBlogValidattion,
  updateBlogValidation,
};

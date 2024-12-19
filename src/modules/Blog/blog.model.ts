import { Schema, model } from "mongoose";
import { TBlog } from "./blog.interface";

const blogSchema = new Schema<TBlog>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Blog = model<TBlog>("Blog", blogSchema);



import { Types } from "mongoose";

export type TBlog = {
  title: string;
  description: string;
  author: Types.ObjectId;
  isPublished: boolean;
};

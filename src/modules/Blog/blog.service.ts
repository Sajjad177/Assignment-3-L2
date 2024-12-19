import { User } from "../User/user.model";
import { TBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const createBlogInDB = async (payload: TBlog) => {
  const { author, ...blogData } = payload;
  const isAuthorExist = await User.findById(author);

  if (!isAuthorExist) {
    throw new Error("Author not found");
  }

  const result = await Blog.create({ ...blogData });
  return result;
};

export const BlogService = {
  createBlogInDB,
};

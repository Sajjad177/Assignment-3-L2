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
  const data = await result.populate("author");
  return data;
};

const updateBlogInDb = async (id: string, payload: Partial<TBlog>) => {
  const isBlogExist = await Blog.findById(id);
  if (!isBlogExist) {
    throw new Error("Blog not found");
  }

  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const BlogService = {
  createBlogInDB,
  updateBlogInDb,
};

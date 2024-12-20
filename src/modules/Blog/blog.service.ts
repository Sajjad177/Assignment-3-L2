import QueryBuilder from "../../builder/Querybuilder";
import { User } from "../User/user.model";
import { TBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const createBlogInDB = async (payload: TBlog) => {
  const { author, ...blogData } = payload;
  const isAuthorExist = await User.findById(author);

  if (!isAuthorExist) {
    throw new Error("Author not found");
  }

  const result = await Blog.create({ ...blogData, author });
  const data = await result.populate("author");
  return data;
};

const getAllBlogFromDB = async (query: Record<string, unknown>) => {
  const isBlogPublished = await Blog.find({ isPublished: true });
  if (!isBlogPublished) {
    throw new Error("BLog is not published");
  }

  const isBlogAuthor = await Blog.find({ author: query.author });
  if (!isBlogAuthor) {
    throw new Error("Blog author not found");
  }

  const blogQuery = new QueryBuilder(Blog.find().populate("author"), query)
    .search(["title"])
    .filter()
    .sort();

  const result = await blogQuery.modelQuery;
  return result;
};

const updateBlogInDb = async (id: string, payload: Partial<TBlog>) => {
  const isBlogExist = await Blog.findById(id);
  if (!isBlogExist) {
    throw new Error("Blog not found");
  }

  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  }).populate("author");
  return result;
};

const deleteBlogInDB = async (id: string) => {
  const isBlogExist = await Blog.findById(id);
  if (!isBlogExist) {
    throw new Error("Blog not found");
  }

  const result = await Blog.findByIdAndDelete(id);
  return result;
};

export const BlogService = {
  createBlogInDB,
  getAllBlogFromDB,
  updateBlogInDb,
  deleteBlogInDB,
};

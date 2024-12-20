import { StatusCodes } from "http-status-codes";
import AppError from "../../error/AppError";
import { Blog } from "../Blog/blog.model";
import { TUser } from "../User/user.interface";
import { User } from "../User/user.model";

const blockUserInDB = async (userId: string, payload: Partial<TUser>) => {
  const user = await User.findByIdAndUpdate(userId, payload, {
    new: true,
    runValidators: true,
  });
  return user;
};

const deleteBlogsFromDB = async (id: string) => {
  if (!id) {
    throw new AppError("Blog not found", StatusCodes.NOT_FOUND);
  }

  const blogs = await Blog.findByIdAndDelete(id);
  return blogs;
};

export const adminService = {
  blockUserInDB,
  deleteBlogsFromDB,
};

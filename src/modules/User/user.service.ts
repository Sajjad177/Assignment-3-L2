import { StatusCodes } from "http-status-codes";
import AppError from "../../error/AppError";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const registerUserInDB = async (payload: TUser) => {
  const user = await User.create(payload);
  return user;
};

export const userService = {
  registerUserInDB,
};

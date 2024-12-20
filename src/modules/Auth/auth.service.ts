import { StatusCodes } from "http-status-codes";
import AppError from "../../error/AppError";
import { User } from "../User/user.model";
import { TLoginUser } from "./auth.interface";

const loginUserInDB = async (payload: TLoginUser) => {
  const { email, password } = payload;
  const user = await User.isUserExist(email);

  if (!user) {
    throw new AppError("User not found", StatusCodes.NOT_FOUND);
  }

  if (!(await User.isPasswordMatched(password, user.password))) {
    throw new AppError("Password is incorrect", StatusCodes.UNAUTHORIZED);
  }

  return user;
};

export const authService = {
  loginUserInDB,
};

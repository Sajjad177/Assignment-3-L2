import { StatusCodes } from "http-status-codes";
import AppError from "../../error/AppError";
import { User } from "../User/user.model";
import { TLoginUser } from "./auth.interface";
import { createToken } from "./auth.utils";
import config from "../../config";

const loginUserInDB = async (payload: TLoginUser) => {
  const user = await User.isUserExist(payload.email);
  if (!user) {
    throw new AppError("User not found", StatusCodes.NOT_FOUND);
  }

  if (!(await User.isPasswordMatched(payload.password, user.password))) {
    throw new AppError("Password is incorrect", StatusCodes.UNAUTHORIZED);
  }

  // create token and send it to user
  const JwtPayload = {
    email: user.email, 
    role: user.role,
  };

  // create access token
  const token = createToken(
    JwtPayload,
    config.jwtAccessTokenExpiresIn as string,
    config.jwtAccessTokenSecret as string
  );

  return {
    token,
  };
};

export const authService = {
  loginUserInDB,
};

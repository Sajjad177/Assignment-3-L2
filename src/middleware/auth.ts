import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import AppError from "../error/AppError";
import { StatusCodes } from "http-status-codes";
import config from "../config";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../modules/User/user.model";
import { TUserRole } from "../modules/User/user.interface";

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const extractedToken = req.headers.authorization;

    const token = extractedToken?.split(" ")[1];
    // check token :
    if (!token) {
      throw new AppError("You are not authorized", StatusCodes.UNAUTHORIZED);
    }

    // checking token is valid or not :
    const decoded = jwt.verify(token, config.jwtAccessTokenSecret as string);

    const { error, role, email } = decoded as JwtPayload;

    if (error) {
      throw new AppError("Invalid credentials", StatusCodes.UNAUTHORIZED);
    }

    const user = await User.isUserExist(email);
    if (!user) {
      throw new AppError("User not found", StatusCodes.NOT_FOUND);
    }

    // checking user role :
    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError("You are not authorized!", StatusCodes.UNAUTHORIZED);
    }

    req.user = decoded as JwtPayload;

    next();
  });
};

export default auth;

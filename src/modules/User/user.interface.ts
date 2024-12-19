import { Model } from "mongoose";
import { USER_ROLES } from "./user.constant";

export interface TUser {
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  isBlocked: boolean;
}

export type TLoginUser = {
  email: string;
  password: string;
};

export interface UseModel extends Model<TUser> {
  isPasswordMatched(password: string, hashedPassword: string): Promise<boolean>;
}

export type TUserModel = keyof typeof USER_ROLES;

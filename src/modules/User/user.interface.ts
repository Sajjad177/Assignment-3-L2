import { Model } from "mongoose";
import { USER_ROLES } from "./user.constant";

export interface TUser {
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  isBlocked: boolean;
}



export interface UseModel extends Model<TUser> {
  isPasswordMatched(password: string, hashedPassword: string): Promise<boolean>;
  isUserExist(email: string): Promise<TUser>;
}

export type TUserModel = keyof typeof USER_ROLES;

import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserInDB = async (payload: TUser) => {
  const user = await User.create(payload);
  return user;
};

export const userService = {
  createUserInDB,
};
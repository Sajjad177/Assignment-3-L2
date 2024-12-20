import { TUser } from "../User/user.interface";
import { User } from "../User/user.model";

const blockUserInDB = async (userId: string, payload: Partial<TUser>) => {
  const user = await User.findByIdAndUpdate(userId, payload, {
    new: true,
    runValidators: true,
  });
  return user;
};

export const adminService = {
  blockUserInDB,
};

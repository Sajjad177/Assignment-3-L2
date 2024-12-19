import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userService } from "./user.service";

const registerUser = catchAsync(async (req, res) => {
  const result = await userService.registerUserInDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "User registered successfully",
    data: {
      id: result._id,
      name: result.name,
      email: result.email,
      role: result.role,
    },
  });
});

const loginUser = catchAsync(async (req, res) => {
  const result = await userService.loginUserInDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "login successfully",
    data: result,
  });
});

export const userController = {
  registerUser,
  loginUser,
};

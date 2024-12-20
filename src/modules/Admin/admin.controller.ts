import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { adminService } from "./admin.service";

const blockUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await adminService.blockUserInDB(userId, req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "User blocked successfully",
    data: result,
  });
});

const deleteBlogs = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await adminService.deleteBlogsFromDB(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Blogs deleted successfully",
    data: result,
  });
});

export const adminController = {
  blockUser,
  deleteBlogs,
};

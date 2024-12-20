import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const internalServerError = (req: Request, res: Response, next: NextFunction) => {
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Internal Server Error",
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
  });
};

export default internalServerError;

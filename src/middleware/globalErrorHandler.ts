import { ZodError } from "zod";
import { TErrorSource } from "../interface/globalInterface";
import handleZodError from "../error/handelZodError";
import { ErrorRequestHandler } from "express";
import handleValidationError from "../error/handleValidationError";
import handleCastError from "../error/handleCastError";
import AppError from "../error/AppError";
import config from "../config";
import handleDuplicateError from "../error/handleDuplicateError";

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = 500;
  let message = "Something went wrong";

  let errorSource: TErrorSource = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  // checking there it's zod error or validation error

  if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSource = simplifiedError?.errorSource;
  } else if (error?.name === "ValidationError") {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSource = simplifiedError?.errorSource;
  } else if (error?.code === 11000) {
    const simplifiedError = handleDuplicateError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSource = simplifiedError?.errorSource;
  } else if (error?.name === "CastError") {
    const simplifiedError = handleCastError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSource = simplifiedError?.errorSource;
  } else if (error instanceof AppError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorSource = [
      {
        path: "",
        message: error?.message,
      },
    ];
  } else if (error instanceof Error) {
    message = error?.message;
    errorSource = [
      {
        path: "",
        message: error?.message,
      },
    ];
  }

  // sending response

  res.status(statusCode).json({
    success: false,
    message,
    errorSource,
    error,
    stack: config.nodeEnv === "development" ? error?.stack : null,
  });
  next();
};

export default globalErrorHandler;

import { AnyZodObject } from "zod";
import catchAsync from "../utils/catchAsync";
import { Request, Response, NextFunction } from "express";

const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await schema.parseAsync({
      ...req.body, // Include all fields from req.body
    });
    next();
  });
};

export default validateRequest;

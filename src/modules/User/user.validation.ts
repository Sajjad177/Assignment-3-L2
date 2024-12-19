import { z } from "zod";

const userValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Enter your full name",
      })
      .min(3)
      .max(30),
    email: z
      .string({
        required_error: "email is required ",
      })
      .email(),
    password: z
      .string({
        required_error: "password is required",
      })
      .min(8),
    role: z.enum(["admin", "user"] as const, {
      required_error: "role is required",
    }),
    isBlocked: z.boolean().optional(),
  }),
});

const loginUserValidationSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: "email is required ",
      })
      .email(),
    password: z
      .string({
        required_error: "password is required",
      })
      .min(8),
  }),
});

export const UserValidation = {
  userValidationSchema,
  loginUserValidationSchema,
};

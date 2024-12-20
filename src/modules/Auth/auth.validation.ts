import { z } from "zod";

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

export const AuthValidation = {
  loginUserValidationSchema,
};

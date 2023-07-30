import { z } from "zod";

const registerSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(4, {
      message: "Username must be at least 4 characters",
    })
    .max(8, {
      message: "Username must be at most 8 characters",
    }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid email",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});

export default registerSchema;

import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
    })
    .max(20, {
      message: "Title must have at most 20 characters",
    }),
  description: z.string({
    required_error: "Description is required",
  }),
  deadline: z.string().datetime().optional(),
  done: z.boolean().optional(),
});

export const updateTaskSchema = z.object({
  title: z
    .string()
    .max(20, {
      message: "Title must have at most 20 characters",
    })
    .optional(),
  description: z.string().optional(),
  deadline: z.string().datetime().optional(),
  done: z.boolean().optional(),
});

import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(1, "Full name is required!"),
  email: z.string().email("Invalid email address!"),
  password: z.string().min(8, "Password must be at least 8 Characters long!"),
});

export type RegisterFormInputs = z.infer<typeof registerSchema>;

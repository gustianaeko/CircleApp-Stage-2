import { z } from "zod";

export const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, "New password must be at least 8 characters long!"),
    confirmNewPassword: z
      .string()
      .min(8, "Confirm password must be at least 8 characters long!"),
  })
  .refine(
    (data) => {
      return data.newPassword === data.confirmNewPassword;
    },
    {
      message: "Passwords must match!",
      path: ["confirmNewPassword"],
    }
  );

export type ResetPasswordFormInputs = z.infer<typeof resetPasswordSchema>;

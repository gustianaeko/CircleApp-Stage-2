import { useState } from "react";
import { ResetPasswordForm } from "../types";

export function useResetForm() {
  const [form, setForm] = useState<ResetPasswordForm>({
    newPassword: "",
    confirmNewPassword: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(form);
  }

  return { form, handleChange, handleSubmit };
}

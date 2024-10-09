import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterFormInputs, registerSchema } from "../schemas/register";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { RegisterRequestDTO, RegisterResponseDTO } from "../types/dto";

export function useRegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const navigate = useNavigate();

  async function onSubmit(data: RegisterFormInputs) {
    try {
      const response = await axios.post<
        null,
        { data: RegisterResponseDTO },
        RegisterRequestDTO
      >("http://localhost:3000/auth/register", {
        email: data.email,
        fullname: data.fullname,
        password: data.password,
      });

      console.log(response);

      navigate("/auth/login");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const {
          response: { data },
        } = error;

        setError(data.details[0].path[0], {
          message: data.details[0].message,
        });
      }
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  };
}

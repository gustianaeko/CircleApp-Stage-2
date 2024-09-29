import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterFormInputs, registerSchema } from "../schemas/register";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/use-store";
import axios from "axios";
import { RegisterRequestDTO, RegisterResponseDTO } from "../types/dto";
import { setUser } from "../../../store/auth-slice";
import { useState } from "react";

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
  const dispatch = useAppDispatch();

  const [showSpinner, setShowSpinner] = useState(false);

  async function onSubmit(data: RegisterFormInputs) {
    setShowSpinner(true);
    try {
      const response = await axios.post<
        null,
        { data: RegisterResponseDTO },
        RegisterRequestDTO
      >("http://localhost:3000/auth/register", {
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      const { id, email, fullName } = response.data;

      dispatch(
        setUser({
          id,
          email,
          fullName,
        })
      );

      setTimeout(() => {
        navigate("/home");
      }, 665);
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
    showSpinner,
    setShowSpinner,
  };
}

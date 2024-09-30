import { useForm } from "react-hook-form";
import { LoginFormInputs, loginSchema } from "../schemas/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/use-store";
import axios from "axios";
import { loginRequestDTO, LoginResponseDTO } from "../types/dto";
import { setUser } from "../../../store/auth-slice";
import Cookies from "js-cookie";

export function useLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  async function onSubmit(data: LoginFormInputs) {
    try {
      const response = await axios.post<
        null,
        { data: LoginResponseDTO },
        loginRequestDTO
      >("http://localhost:3000/auth/login", {
        email: data.email,
        password: data.password,
      });

      const { user, token } = response.data;

      dispatch(setUser(user));

      Cookies.set("token", token, { expires: 1 });

      navigate("/home");
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

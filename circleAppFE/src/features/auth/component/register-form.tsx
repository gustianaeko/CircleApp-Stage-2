import {
  Box,
  Button,
  FormControl,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RegisterFormInputs, registerSchema } from "../schemas/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useAppDispatch } from "../../../hooks/use-store";
import { setUser } from "../../../store/auth-slice";

export function RegisterForm() {
  const navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(false);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  async function onSubmit({ email, fullName }: RegisterFormInputs) {
    setShowSpinner(true);

    localStorage.setItem("id", "1");
    localStorage.setItem("email", email);
    localStorage.setItem("fullName", fullName);

    dispatch(
      setUser({
        id: 1,
        email,
        fullName,
      })
    );

    setTimeout(() => {
      navigate("/home");
    }, 665);
  }

  return (
    <Box
      mt={"40px"}
      mx="auto"
      width="412px"
      alignItems="center"
      justifyContent="center"
      top={"128px"}
      left={"658px"}
      padding={"5px"}
      display={"block"}
      textColor={"#FFFFFF"}
    >
      <Text
        as={"h1"}
        alignItems="center"
        justifyContent="start"
        color={"brand.green"}
        fontSize={"32px"}
        fontFamily={"fonts.body"}
        fontWeight={"650"}
      >
        circle
      </Text>
      <Text
        // backgroundColor={"red"}
        alignItems="center"
        justifyContent="start"
        color={"white"}
        fontSize={"20px"}
        fontWeight={"500"}
        fontFamily={"fonts.body"}
        marginBottom={"20px"}
      >
        Create account Circle
      </Text>
      <FormControl
        gap={"5"}
        width={"412px"}
        height={"368px"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Input
          {...register("fullName")}
          type="text"
          name="fullName"
          width={"100%"}
          height={"48px"}
          display={"block"}
          borderRadius={"md"}
          placeholder="Full Name"
          border={"1px solid #545454"}
          backgroundColor={"transparent"}
          required
        />
        {errors.fullName && (
          <p style={{ color: "red", margin: 0 }}>{errors.fullName.message}</p>
        )}

        <Input
          {...register("email")}
          type="email"
          name="email"
          width={"100%"}
          height={"48px"}
          display={"block"}
          borderRadius={"md"}
          placeholder="Email"
          border={"1px solid #545454"}
          backgroundColor={"transparent"}
        />
        {errors.email && (
          <p style={{ color: "red", margin: 0 }}>{errors.email.message}</p>
        )}

        <Input
          {...register("password")}
          type="password"
          name="password"
          width={"100%"}
          height={"48px"}
          display={"block"}
          borderRadius={"md"}
          placeholder="Password"
          border={"1px solid #545454"}
          backgroundColor={"transparent"}
        />

        {errors.password && (
          <p style={{ color: "red", margin: 0 }}>{errors.password.message}</p>
        )}
        <Button
          onClick={handleSubmit(onSubmit)}
          color={"white"}
          bgColor={"brand.green"}
          fontFamily={"fonts.body"}
          borderRadius={"45px"}
          height={"44px"}
          border={"none"}
          fontWeight={"bold"}
          fontStyle={"fonts.body"}
          _hover={{ backgroundColor: "#FFF", color: "#04A51E" }}
          isDisabled={isSubmitting}
        >
          {showSpinner ? <Spinner /> : "Create"}
        </Button>
        <Text
          alignItems="center"
          justifyContent="start"
          color={"white"}
          fontFamily={"fonts.body"}
        >
          Already have account?
          <Text
            cursor={"pointer"}
            as={"span"}
            color={"#04A51E"}
            textDecoration={"none"}
            marginLeft={"4px"}
            onClick={handleSubmit(onSubmit)}
          >
            Login
          </Text>
        </Text>
      </FormControl>
    </Box>
  );
}

import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import {
  ResetPasswordFormInputs,
  resetPasswordSchema,
} from "../schemas/resetPassword";
import { zodResolver } from "@hookform/resolvers/zod";

export function ResetForm() {
  // const { handleChange, handleSubmit } = useResetForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormInputs>({
    resolver: zodResolver(resetPasswordSchema),
  });

  function onSubmit(data: ResetPasswordFormInputs) {
    console.log(data);
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
        Reset password
      </Text>
      <FormControl
        gap={"5"}
        width={"412px"}
        height={"368px"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Input
          {...register("newPassword")}
          type="password"
          name="newPassword"
          width={"100%"}
          height={"48px"}
          display={"block"}
          borderRadius={"md"}
          placeholder="New Password"
          border={"1px solid #545454"}
          backgroundColor={"transparent"}
        />
        {errors.newPassword && (
          <p style={{ color: "red", margin: 0 }}>
            {errors.newPassword.message}
          </p>
        )}

        <Input
          {...register("confirmNewPassword")}
          type="password"
          name="confirmNewPassword"
          width={"100%"}
          height={"48px"}
          display={"block"}
          borderRadius={"md"}
          placeholder="Confirm New Password"
          border={"1px solid #545454"}
          backgroundColor={"transparent"}
        />
        {errors.confirmNewPassword && (
          <p style={{ color: "red", margin: 0 }}>
            {errors.confirmNewPassword.message}
          </p>
        )}
        <Button
          type="submit"
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
        >
          Create New Password
        </Button>
      </FormControl>
    </Box>
  );
}

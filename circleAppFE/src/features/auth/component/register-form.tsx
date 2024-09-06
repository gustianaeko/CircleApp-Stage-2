import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";
import { useRegisterForm } from "../hooks/use-register-form";
import { useNavigate } from "react-router-dom";

export function RegisterForm() {
  const { handleChange, handleSubmit } = useRegisterForm();
  const navigate = useNavigate();

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
          type="text"
          name="fullName"
          width={"100%"}
          height={"48px"}
          display={"block"}
          borderRadius={"md"}
          onChange={handleChange}
          placeholder="Full Name"
          border={"1px solid #545454"}
          backgroundColor={"transparent"}
          required
        />

        <Input
          type="email"
          name="email"
          width={"100%"}
          height={"48px"}
          display={"block"}
          borderRadius={"md"}
          onChange={handleChange}
          placeholder="Email"
          border={"1px solid #545454"}
          backgroundColor={"transparent"}
        />

        <Input
          type="password"
          name="password"
          width={"100%"}
          height={"48px"}
          display={"block"}
          borderRadius={"md"}
          onChange={handleChange}
          placeholder="Password"
          border={"1px solid #545454"}
          backgroundColor={"transparent"}
        />
        <Button
          type="submit"
          onClick={handleSubmit}
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
          Create
        </Button>
        <Text
          alignItems="center"
          justifyContent="start"
          color={"white"}
          fontFamily={"fonts.body"}
        >
          Already have account?
          <Text
            href=""
            as={"a"}
            color={"#04A51E"}
            textDecoration={"none"}
            marginLeft={"4px"}
            onClick={() => navigate("/login")}
          >
            Login
          </Text>
        </Text>
      </FormControl>
    </Box>
  );
}

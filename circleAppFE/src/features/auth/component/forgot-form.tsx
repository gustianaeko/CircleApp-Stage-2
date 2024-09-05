import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";
import { useForgotForm } from "../hooks/use-forgot-form";

export function ForgotForm() {
  const { handleChange, handleSubmit } = useForgotForm();

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
        Forgot password
      </Text>
      <FormControl
        gap={"5"}
        width={"412px"}
        height={"368px"}
        display={"flex"}
        flexDirection={"column"}
      >
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
          Send Instruction
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
          >
            Login
          </Text>
        </Text>
      </FormControl>
    </Box>
  );
}

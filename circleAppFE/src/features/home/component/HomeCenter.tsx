import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
} from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";

export function HomeCenter() {
  return (
    <Box
      mt={"25px"}
      width={"40%"}
      display={"flex"}
      color={"#FFFFFF"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box display={"flex"} alignItems={"center"}>
        <Image
          alt=""
          top={"115px"}
          left={"30px"}
          boxSize="40px"
          display={"block"}
          borderRadius="500px"
          src="https://static.vecteezy.com/system/resources/previews/009/749/878/non_2x/woman-profile-mascot-illustration-female-avatar-icon-cartoon-girl-head-face-business-user-logo-free-vector.jpg"
        />

        <Input
          type="text"
          ms={"13px"}
          border={"none"}
          width={"1050px"}
          height={"25px"}
          fontWeight={"500"}
          fontSize={"22px"}
          color={"#FFFFFF"}
          placeholder="What is happening?!"
          _placeholder={{ color: "brand.placeholder" }}
        />
      </Box>

      <Box ms={"10px"} display={"flex"} alignItems={"center"}>
        <FormControl me={"10px"}>
          <FormLabel
            display={"flex"}
            color={"#005E0E"}
            fontSize={"27px"}
            alignItems={"center"}
            paddingTop={"10px"}
          >
            <LuImagePlus />
          </FormLabel>

          <Input type="file" hidden />
        </FormControl>

        <Button
          padding={"5px 20px"}
          border={"none"}
          height={"30px"}
          fontSize={"14px"}
          color={"#FFFFFF"}
          cursor={"pointer"}
          fontWeight={"bold"}
          borderRadius={"15px"}
          backgroundColor={"#005E0E"}
          _hover={{ backgroundColor: "#FFFFFF", color: "#FFFFFF" }}
        >
          Post
        </Button>
      </Box>
    </Box>
  );
}

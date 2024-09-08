import { Box, Card, Text } from "@chakra-ui/react";
import { AiFillInstagram, AiOutlineGithub } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export function AuthorMetaCard() {
  return (
    <Card
      mx={"auto"}
      mt={"20px"}
      width={"90%"}
      borderRadius={"5px"}
      paddingBottom={"20px"}
      backgroundColor={"brand.cardBackground"}
    >
      <Box mx={"auto"} width={"90%"} bg={"brand.cardBackground"}>
        <Text
          color={"fonts.color"}
          bg={"brand.cardBackground"}
          as={"p"}
          mt={"15px"}
          fontSize={"14px"}
          display={"flex"}
        >
          Developed by Eko Gustiana •
          <AiOutlineGithub
            fontSize={"20px"}
            style={{
              backgroundColor: "brand.cardBackground",
              marginLeft: "4px",
              color: "#B2B2B2",
              padding: "1px",
            }}
          />
          <FaLinkedin
            fontSize={"20px"}
            style={{
              backgroundColor: "brand.cardBackground",
              marginLeft: "4px",
              color: "#B2B2B2",
              padding: "1px",
            }}
          />
          <FaFacebook
            fontSize={"20px"}
            style={{
              backgroundColor: "brand.cardBackground",
              marginLeft: "4px",
              color: "#B2B2B2",
              padding: "1px",
            }}
          />
          <AiFillInstagram
            fontSize={"22px"}
            style={{
              backgroundColor: "brand.cardBackground",
              marginLeft: "4px",
              color: "#B2B2B2",
            }}
          />
        </Text>
        <Text
          as="p"
          bg={"brand.cardBackground"}
          display={"flex"}
          fontSize={"10px"}
          color={"#B2B2B2"}
        >
          Powered By Dumbways Indonesia • #1 Coding Bootcamp
        </Text>
      </Box>
      ;
    </Card>
  );
}

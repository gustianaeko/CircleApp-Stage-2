import { Flex, Image, Text } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { TbMessage } from "react-icons/tb";

export function PostAction() {
  return (
    <Flex gap={4} marginY={1} alignItems={"center"}>
      <Flex gap={1} alignItems={"center"}>
        <AiFillHeart color="red" cursor="pointer" size={24} />
        <Text
          fontSize={"14px"}
          fontWeight={400}
          lineHeight={"20px"}
          color={"fonts.color"}
        >
          293
        </Text>
      </Flex>
      <Flex gap={1} alignItems={"center"}>
        <TbMessage cursor="pointer" size={24} />
        <Text
          fontSize={"14px"}
          fontWeight={400}
          lineHeight={"20px"}
          color={"fonts.color"}
        >
          281 Replies
        </Text>
      </Flex>
    </Flex>
  );
}

export function RepliesAction() {
  return (
    <Flex gap={4} marginY={1} alignItems={"center"}>
      <Flex gap={2} alignItems={"center"}>
        <Image src="./heart.svg" alt="like" height={"18px"} />
        <Text
          fontSize={"14px"}
          fontWeight={400}
          lineHeight={"20px"}
          color={"brand.fontSecondary"}
        >
          293
        </Text>
      </Flex>
    </Flex>
  );
}

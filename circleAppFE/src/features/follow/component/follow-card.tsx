import { Box, Button, Image, Spacer, Text } from "@chakra-ui/react";

export function FollowCard() {
  return (
    <Box
      mt={"13px"}
      bg={"brand.cardBackground"}
      display={"flex"}
      alignItems={"center"}
    >
      <Box bg={"brand.cardBackground"} display={"flex"} alignItems={"center"}>
        <Image
          alt=""
          top={"115px"}
          left={"30px"}
          boxSize={"40px"}
          display={"block"}
          borderRadius={"500px"}
          src="https://storage.ko-fi.com/cdn/useruploads/post/25e633e3-79de-4356-a87d-5e3048c1852a_chamber.jpg"
        />
        <Text
          as={"p"}
          ms={"10px"}
          fontSize={"12px"}
          fontWeight={"bold"}
          color={"fonts.color"}
        >
          morgan
          <Text fontSize={"10px"} color={"#909090"}>
            @morgan
          </Text>
        </Text>
      </Box>
      <Spacer bg={"brand.cardBackground"} />
      <Box bg={"brand.cardBackground"}>
        <Button
          height={"28px"}
          color={"#FFFFFF"}
          fontSize={"10px"}
          bg={"transparent"}
          fontWeight={"700"}
          padding={"5px 13px"}
          borderRadius={"20px"}
          border={"1px solid #FFFFFF"}
        >
          Follow
        </Button>
      </Box>
    </Box>
  );
}

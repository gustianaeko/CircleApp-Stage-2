import { Box, Button, Image, Spacer, Text } from "@chakra-ui/react";

export function FollowingCard() {
  return (
    <Box
      bg={"brand.cardBackground"}
      display={"flex"}
      alignItems={"center"}
      mt={"13px"}
    >
      <Box display={"flex"} alignItems={"center"} bg={"brand.cardBackground"}>
        <Image
          alt=""
          top={"115px"}
          left={"30px"}
          boxSize={"40px"}
          display={"block"}
          borderRadius={"500px"}
          src="https://avatarfiles.alphacoders.com/319/319007.jpg"
        />
        <Text
          as={"p"}
          ms={"10px"}
          fontSize={"12px"}
          fontWeight={"bold"}
          color={"fonts.color"}
        >
          Eko Gustiana
          <Text fontSize={"10px"} color={"#909090"}>
            @gustianaeko
          </Text>
        </Text>
      </Box>
      <Spacer bg={"brand.cardBackground"} />
      <Box bg={"brand.cardBackground"}>
        <Button
          padding={"5px 13px"}
          height={"28px"}
          bg={"transparent"}
          color={"fonts.color"}
          borderRadius={"20px"}
          border={"1px solid #FFFFFF"}
          fontWeight={"700px"}
          fontSize={"10px"}
        >
          Following
        </Button>
      </Box>
    </Box>
  );
}

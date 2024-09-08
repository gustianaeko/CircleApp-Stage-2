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
          src="https://scontent.fsrg6-1.fna.fbcdn.net/v/t39.30808-6/410356849_824742529663136_1733588446736618042_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=An1ifmPh2aIQ7kNvgFVfNPh&_nc_ht=scontent.fsrg6-1.fna&_nc_gid=A2zRvDItnixU46K9F_oXdjH&oh=00_AYB54h-mOjRC49-S-EclJ9Q7wj7s_Nb7jxHEGNYyu6FZQw&oe=66E2E6D1"
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

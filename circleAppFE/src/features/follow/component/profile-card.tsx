import {
  Box,
  Button,
  Card,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store/store";

export function ProfileCard() {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth)
  return (
    <Card
      mx={"auto"}
      mt={"20px"}
      width={"90%"}
      paddingBottom={"20px"}
      borderRadius={"5px"}
      backgroundColor={"brand.cardBackground"}
    >
      <Box mx={"auto"} width={"90%"} bg={"brand.cardBackground"}>
        <Heading
          fontSize={"20px"}
          my={"15px"}
          bg={"brand.cardBackground"}
          color={"#FFFFFF"}
        >
          My Profile
        </Heading>
        <Image
          borderRadius="10px"
          display={"block"}
          width={"100%"}
          height={"100px"}
          src="https://wallpapercave.com/wp/wp2471697.jpg"
          alt=""
        />
        <Image
          alt=""
          top={"115px"}
          left={"30px"}
          boxSize="73px"
          display={"block"}
          borderRadius="500px"
          position={"absolute"}
          border={"3px solid black"}
          src={"https://static.vecteezy.com/system/resources/previews/009/749/878/non_2x/woman-profile-mascot-illustration-female-avatar-icon-cartoon-girl-head-face-business-user-logo-free-vector.jpg"}
        />
        <Button
          width={"25%"}
          top={"159px"}
          right={"20px"}
          height={"28px"}
          color={"#FFFFFF"}
          fontSize={"10px"}
          fontWeight={"700"}
          bg={"transparent"}
          borderRadius={"20px"}
          position={"absolute"}
          border={"1px solid #FFFFFF"}
          cursor={"pointer"}
          onClick={() => navigate("/profile")}
        >
          Edit Profile
        </Button>
        <Box
          marginTop={"43px"}
          marginLeft={"10px"}
          color={"#FFFFFF"}
          bg={"transparent"}
        >
          <Text bg={"transparent"} fontWeight="bold" fontSize="14px">
            {user.fullname}
          </Text>
          <Text bg={"transparent"} color={"#909090"} my={"5"} fontSize="11px">
            @{user.username}
          </Text>
          <Text my="5" bg={"transparent"} fontSize="11px">
           {user.bio}
          </Text>
          <HStack mt="4" bg={"transparent"}>
            <Text fontSize="11px" bg={"transparent"}>
              291
              <Text
                color={"#909090"}
                as={"span"}
                bg={"transparent"}
                marginLeft={"2px"}
              >
                Following
              </Text>
            </Text>
            <Text fontSize="11px" bg={"transparent"}>
              23
              <Text
                color={"#909090"}
                as={"span"}
                bg={"transparent"}
                marginLeft={"2px"}
              >
                Followers
              </Text>
            </Text>
          </HStack>
        </Box>
      </Box>
    </Card>
  );
}

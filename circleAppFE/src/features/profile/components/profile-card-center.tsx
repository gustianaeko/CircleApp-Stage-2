import {
  Box,
  Button,
  Card,
  Heading,
  HStack,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import EditProfileModal from "./modal-edit-profile";

export function ProfileCardCenter() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Card
      mx={"auto"}
      mt={"20px"}
      width={"90%"}
      paddingBottom={"20px"}
      borderRadius={"5px"}
      backgroundColor={"#1D1D1D"}
      shadow={"none"}
    >
      <Box mx={"auto"} width={"95%"} bg={"#1D1D1D"}>
        <Heading
          fontSize={"20px"}
          my={"15px"}
          bg={"#1D1D1D"}
          color={"#FFFFFF"}
        ></Heading>
        <Image
          borderRadius="10px"
          display={"block"}
          width={"100%"}
          height={"160px"}
          src="https://wallpapercave.com/wp/wp2471697.jpg"
          alt=""
        />
        <Image
          alt=""
          top={"130px"}
          left={"60px"}
          boxSize="85px"
          display={"block"}
          borderRadius="500px"
          position={"absolute"}
          border={"3px solid black"}
          src="https://static.vecteezy.com/system/resources/previews/009/749/878/non_2x/woman-profile-mascot-illustration-female-avatar-icon-cartoon-girl-head-face-business-user-logo-free-vector.jpg"
        />
        <Button
          width={"10%"}
          top={"186px"}
          right={"60px"}
          height={"28px"}
          color={"#FFFFFF"}
          fontSize={"13px"}
          fontWeight={"700"}
          bg={"transparent"}
          borderRadius={"20px"}
          position={"absolute"}
          border={"1px solid #FFFFFF"}
          onClick={onOpen}
        >
          <EditProfileModal isOpen={isOpen} onClose={onClose} />
          Edit Profile
        </Button>
        <Box
          marginTop={"46px"}
          marginLeft={"10px"}
          color={"#FFFFFF"}
          bg={"transparent"}
        >
          <Text bg={"transparent"} fontWeight="bold" fontSize="20px">
            ✨ Stella Audhina ✨
          </Text>
          <Text bg={"transparent"} color={"#909090"} my={"2"} fontSize="12px">
            @audhinaha
          </Text>
          <Text my="2" bg={"transparent"} fontSize="13px">
            Picked over by the worms, and weird fishes.
          </Text>
          <HStack mt="2" bg={"transparent"}>
            <Text fontSize="13px" bg={"transparent"}>
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
            <Text fontSize="13px" bg={"transparent"}>
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

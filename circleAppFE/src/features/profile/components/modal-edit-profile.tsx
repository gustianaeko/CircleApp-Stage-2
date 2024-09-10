import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  FormControl,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";

export function EditProfile() {
  return (
    <Card
      mx={"auto"}
      mt={"20px"}
      width={"600px"}
      paddingBottom={"20px"}
      borderRadius={"5px"}
      backgroundColor={"brand.cardBackground"}
    >
      <Box mx={"auto"} width={"90%"} bg={"brand.cardBackground"}>
        <Box display={"flex"} alignItems={"center"}>
          <Heading
            fontSize={"20px"}
            my={"15px"}
            bg={"brand.cardBackground"}
            color={"#FFFFFF"}
          >
            Edit Profile
          </Heading>
          <Spacer />
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="white"
            aria-label="Done"
            fontSize="20px"
            icon={<CloseIcon />}
          />
        </Box>
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
          src="https://static.vecteezy.com/system/resources/previews/009/749/878/non_2x/woman-profile-mascot-illustration-female-avatar-icon-cartoon-girl-head-face-business-user-logo-free-vector.jpg"
        />

        <Box
          marginTop={"43px"}
          marginLeft={"10px"}
          color={"#FFFFFF"}
          bg={"transparent"}
        >
          <FormControl>
            <Input type="text"></Input>
          </FormControl>
          <Text bg={"transparent"} fontWeight="bold" fontSize="14px">
            ✨ Stella Audhina ✨
          </Text>
          <Text bg={"transparent"} color={"#909090"} my={"5"} fontSize="11px">
            @audhinaha
          </Text>
          <Text my="5" bg={"transparent"} fontSize="11px">
            Picked over by the worms, and weird fishes.
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

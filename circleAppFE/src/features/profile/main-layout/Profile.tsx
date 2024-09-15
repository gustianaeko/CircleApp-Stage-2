import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { LeftSidebar } from "../../home/nav/left-sidebar";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { ProfileCardCenter } from "../components/profile-card-center";
import { RightSidebarProfile } from "../nav/right-sidebar-profile";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const navigate = useNavigate();
  return (
    <>
      <Flex>
        <Box width="15.33%">
          <LeftSidebar />
        </Box>
        <Box width="64.7%" padding={"10px 5px 2px 5px"} marginTop={"20px"}>
          <Heading
            as={"h1"}
            color={"fonts.color"}
            fontWeight={"700px"}
            fontSize={"28px"}
            lineHeight={"35px"}
            marginLeft={"50px"}
          >
            <ArrowBackIcon
              w={8}
              h={8}
              marginRight={"20px"}
              paddingBottom={"4px"}
              onClick={() => navigate("/home")}
              cursor={"pointer"}
            />
            ✨ Stella Audhina ✨
          </Heading>
          <ProfileCardCenter />
          <Flex
            color={"white"}
            justifyContent={"space-evenly"}
            mt={7}
            borderBottom={"2px solid grey"}
          >
            <Box
              textAlign={"center"}
              cursor={"pointer"}
              borderBottom={"4px solid green"}
              w={300}
            >
              <Text>All post</Text>
            </Box>
            <Box
              textAlign={"center"}
              cursor={"pointer"}
              borderBottom={"none"}
              w={300}
            >
              <Text>Media</Text>
            </Box>
          </Flex>
        </Box>
        <Box width="20%">
          <RightSidebarProfile />
        </Box>
      </Flex>
    </>
  );
}

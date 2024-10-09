import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import { LeftSidebar } from "../nav/left-sidebar";
import { RightSidebar } from "../nav/right-sidebar";
import { HomeCenter } from "../component/HomeCenter";
import { HomeThreadsCards } from "../component/home-threads";


export function Home() {

  return (
    <>
      <Flex>
        <Box width="15.33%">
          <LeftSidebar />
        </Box>
        <Box width="64.9%" marginTop={"38px"}>
          <Heading
            as={"h1"}
            color={"fonts.color"}
            fontWeight={"700px"}
            fontSize={"28px"}
            lineHeight={"35px"}
            marginLeft={"50px"}
          >
            HOME
          </Heading>
          <HomeCenter />
          <Divider borderColor="rgba(144, 144, 144, 1)" mt="20px" />

        <HomeThreadsCards/>

        </Box>
        <Box width="20%">
          <RightSidebar />
        </Box>
      </Flex>
    </>
  );
}

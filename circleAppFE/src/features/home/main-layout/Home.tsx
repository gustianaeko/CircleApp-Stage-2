import { Box, Flex, Heading } from "@chakra-ui/react";
import { LeftSidebar } from "../nav/left-sidebar";
import { RightSidebar } from "../nav/right-sidebar";

import { HomeCenter } from "../component/HomeCenter";

export function Home() {
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
          >
            HOME
          </Heading>
          <HomeCenter />
        </Box>
        <Box width="20%">
          <RightSidebar />
        </Box>
      </Flex>
    </>
  );
}

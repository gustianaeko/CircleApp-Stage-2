import { Box, Flex, Heading } from "@chakra-ui/react";
import { LeftSidebar } from "../../home/nav/left-sidebar";
import { RightSidebar } from "../../home/nav/right-sidebar";
import FollowsTabs from "../component/follows-tabs";

export function Follows() {
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
            FOLLOWS
          </Heading>
          <FollowsTabs />
        </Box>
        <Box width="20%">
          <RightSidebar />
        </Box>
      </Flex>
    </>
  );
}

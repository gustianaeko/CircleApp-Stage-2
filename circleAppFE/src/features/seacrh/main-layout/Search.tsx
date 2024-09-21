import { Box, Flex } from "@chakra-ui/react";
import { LeftSidebar } from "../../home/nav/left-sidebar";
import { RightSidebar } from "../../home/nav/right-sidebar";
import SearchBar from "../components/search-bar";
import { StartSearch } from "../components/search-start";

export function Search() {
  return (
    <>
      <Flex>
        <Box width="15.33%">
          <LeftSidebar />
        </Box>
        <Box width="64.7%" padding={"10px 5px 2px 5px"} marginTop={"20px"}>
          <SearchBar />
          <StartSearch />
        </Box>
        <Box width="20%">
          <RightSidebar />
        </Box>
      </Flex>
    </>
  );
}

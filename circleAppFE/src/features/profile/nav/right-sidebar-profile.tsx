import { Box } from "@chakra-ui/react";

import { AuthorMetaCard } from "../../follow/component/author-meta-card";
import { SuggestionCard } from "../../follow/component/suggestion-card";

export function RightSidebarProfile() {
  return (
    <Box
      width={"370px"}
      height={"100vh"}
      position={"fixed"}
      borderLeft={"1px solid #545454"}
      marginRight={"50px"}
      paddingTop={"12px"}
    >
      <SuggestionCard />
      <AuthorMetaCard />
    </Box>
  );
}

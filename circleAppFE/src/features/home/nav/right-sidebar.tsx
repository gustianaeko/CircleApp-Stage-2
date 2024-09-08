import { Box } from "@chakra-ui/react";

import { AuthorMetaCard } from "../../follow/component/author-meta-card";
import { SuggestionCard } from "../../follow/component/suggestion-card";
import { ProfileCard } from "../../follow/component/profile-card";

export function RightSidebar() {
  return (
    <Box
      right={"0"}
      width={"370px"}
      height={"100vh"}
      position={"fixed"}
      borderLeft={"1px solid #545454"}
    >
      <ProfileCard />
      <SuggestionCard />
      <AuthorMetaCard />
    </Box>
  );
}

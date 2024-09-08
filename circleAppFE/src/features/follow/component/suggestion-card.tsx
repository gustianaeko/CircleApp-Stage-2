import { Box, Card, Heading } from "@chakra-ui/react";
import { FollowCard } from "./follow-card";
import { FollowingCard } from "./following-card";

export function SuggestionCard() {
  return (
    <Card
      mx={"auto"}
      mt={"20px"}
      width={"90%"}
      borderRadius={"5px"}
      paddingBottom={"20px"}
      backgroundColor={"brand.cardBackground"}
    >
      <Box mx={"auto"} width={"90%"} bg={"brand.cardBackground"}>
        <Heading
          fontSize={"20px"}
          my={"15px"}
          bg={"brand.cardBackground"}
          color={"fonts.color"}
        >
          Suggested for you
        </Heading>
        <FollowCard />
        <FollowingCard />
      </Box>
    </Card>
  );
}

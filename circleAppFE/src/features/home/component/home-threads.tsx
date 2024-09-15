import { Avatar, Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbMessage } from "react-icons/tb";

export function HomeThreadsCards() {
  return (
    <Box>
      <Flex ml="50px" color="white" mt="40px">
        <Avatar
          w="40px"
          h="40px"
          src="https://i.pinimg.com/originals/ea/c2/b7/eac2b7844ad390cd510dc94bb4e7a7ab.jpg"
        />
        <Flex flexDirection="column">
          <Flex fontSize="14px" gap={1} ml={3}>
            <Text color="white">Son Goku</Text>
            <Text color="rgba(144, 144, 144, 1)">@songoku</Text>
            <Text color="rgba(144, 144, 144, 1)">•</Text>
            <Text color="rgba(144, 144, 144, 1)">23 hours ago</Text>
          </Flex>

          <Flex ml={3} mt={2} borderRadius="xl" w="50vh">
            <Image
              borderRadius={"15px"}
              src="https://images4.alphacoders.com/610/610757.jpg"
            />
          </Flex>

          <Flex ml={3} mt={2} borderRadius="xl" display="none">
            <Image src="https://images4.alphacoders.com/610/610757.jpg" />
          </Flex>

          <Text
            textAlign="justify"
            ml={3}
            fontSize="14px"
            mt={2}
            color="white"
            pr="50px"
          >
            hari yang cerah
          </Text>
          <Flex gap={2} fontSize="14px" ml={3} mt={3}>
            <Box>
              <AiFillHeart color="red" cursor="pointer" size={24} />
              {/* <AiOutlineHeart cursor="pointer" size={24} /> */}
            </Box>
            <Text mr={3}>35</Text>
            <TbMessage cursor="pointer" size={24} />
            <Text>381 Replies</Text>
          </Flex>
        </Flex>
      </Flex>

      <Divider borderColor="rgba(144, 144, 144, 1)" mt="20px" />
    </Box>
  );
}

import { Avatar, Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { TbMessage } from "react-icons/tb";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Thread } from "../types/thread";

export function HomeThreadsCards() {
  async function getThreads() {
    const response = await axios.get(
      `https://api.npoint.io/71a12152a5b230dd1e69`
    );

    return response.data;
  }

  const { data } = useQuery<null, Error, Thread[]>({
    queryKey: ["threads"],
    queryFn: getThreads,
  });

  return (
    <>
      {data?.map((thread) => {
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
                  <Text color="white">{thread.fullName}</Text>
                  <Text color="rgba(144, 144, 144, 1)">{thread.username}</Text>
                  <Text color="rgba(144, 144, 144, 1)">•</Text>
                  <Text color="rgba(144, 144, 144, 1)">{thread.createdAt}</Text>
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
                  {thread.content}
                </Text>
                <Flex gap={2} fontSize="14px" ml={3} mt={3}>
                  <Box>
                    <AiFillHeart color="red" cursor="pointer" size={24} />
                    {/* <AiOutlineHeart cursor="pointer" size={24} /> */}
                  </Box>
                  <Text mr={3}>{thread.likesCount}</Text>
                  <TbMessage cursor="pointer" size={24} />
                  <Text>{thread.repliesCount}</Text>
                </Flex>
              </Flex>
            </Flex>

            <Divider borderColor="rgba(144, 144, 144, 1)" mt="20px" />
          </Box>
        );
      })}
    </>
  );
}

import { Avatar, Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { TbMessage } from "react-icons/tb";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import { apiBaseURL } from "../../../libs/api";
import { UserStoreDTO } from "../../auth/types/dto";

export function HomeThreadsCards() {
  async function getThreads() {
    const response = await apiBaseURL.get<null, {data: UserStoreDTO}>(
      "auth/check", {headers: {
        Authorization : `Bearer ${Cookies.get("token")}`
      }}
    )

    return response.data.threads;
  }

  const { data: threads,  } = useQuery({
    queryKey: ["threads"],
    queryFn: getThreads
  });

  return (
    <>
      {threads?.map((thread) => {
        return (
          <Box>
            <Flex ml="50px" color="white" mt="40px">
              <Avatar
                w="40px"
                h="40px"
                src={thread.author.profilePhoto}
              />
              <Flex flexDirection="column">
                <Flex fontSize="14px" gap={1} ml={3}>
                  <Text color="white">{thread.fullName}</Text>
                  <Text color="rgba(144, 144, 144, 1)">{thread.author.username}</Text>
                  <Text color="rgba(144, 144, 144, 1)">•</Text>
                  <Text color="rgba(144, 144, 144, 1)">{new Date(thread.createdAt).toLocaleString()}</Text>
                </Flex>

                <Flex ml={3} mt={2} borderRadius="xl" w="50vh">
                  <Image
                    borderRadius={"15px"}
                    src={thread.image}
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
                  <Text mr={3}>{thread.likesCount} like</Text>
                  <TbMessage cursor="pointer" size={24} />
                  <Text>{thread.repliesCount} replies</Text>
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

import { Avatar, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Post } from "../types/post";

export default function PostContent({
  image,
  fullName,
  userName,
  postImage,
  children,
}: Post) {
  return (
    <Link to="/detail-post">
      <Flex gap={4} padding={4} marginTop={"12px"}>
        <Avatar
          src={image}
          name="Stella Audhina"
          height={"40px"}
          width={"40px"}
        />
        <Flex direction={"column"} gap={2}>
          <Link to="/profile">
            <Flex gap={1}>
              <Text
                fontSize={"14px"}
                mb={1}
                fontWeight={700}
                lineHeight={"16px"}
              >
                {fullName}
              </Text>
              <Text
                fontSize={"14px"}
                fontWeight={400}
                lineHeight={"16px"}
                color={"brand.grey"}
              >
                {userName}
              </Text>
              <Text
                fontSize={"14px"}
                fontWeight={400}
                lineHeight={"16px"}
                color={"brand.grey"}
              >
                •
              </Text>
              <Text
                fontSize={"14px"}
                fontWeight={400}
                lineHeight={"16px"}
                color={"brand.grey"}
              >
                10h
              </Text>
            </Flex>
          </Link>
          <Text fontSize={"14px"} fontWeight={400} lineHeight={"20px"}>
            Berbagi momen tak terlupakan hari ini! Jangan lupa untuk selalu
            menghargai setiap langkah kecil dalam perjalanan hidup. Apa momen
            terbaikmu hari ini? Mari saling menginspirasi dengan cerita-cerita
            positif. Karena kebahagiaan sejati datang dari hal-hal sederhana.
            #inspiration #motivation #positivity #grateful
          </Text>
          <Image src={postImage} width={"400px"} rounded={8} />
          {children}
        </Flex>
      </Flex>
      <Divider borderColor="rgba(144, 144, 144, 1)" />
    </Link>
  );
}

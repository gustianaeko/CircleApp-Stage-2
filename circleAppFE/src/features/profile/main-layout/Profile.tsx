import {
  Box,
  Flex,
  Heading,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { LeftSidebar } from "../../home/nav/left-sidebar";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { ProfileCardCenter } from "../components/profile-card-center";
import { RightSidebarProfile } from "../nav/right-sidebar-profile";
import { useNavigate } from "react-router-dom";
import { TabIndicatorCircle, TabItem } from "../components/profile-tab-item";
import PostList from "../components/profile-post-list";
import MediaList from "../components/profile-media-list";

export function Profile() {
  const navigate = useNavigate();
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
            marginLeft={"50px"}
          >
            <ArrowBackIcon
              w={8}
              h={8}
              marginRight={"20px"}
              paddingBottom={"4px"}
              onClick={() => navigate("/home")}
              cursor={"pointer"}
            />
            ✨ Stella Audhina ✨
          </Heading>
          <ProfileCardCenter />
          <Tabs isFitted variant={"unstyle"}>
            <TabList borderBottom="1px solid" borderColor="brand.grey">
              <TabItem tabName="All Post" />
              <TabItem tabName="Media" />
            </TabList>
            <TabIndicatorCircle />
            <TabPanels>
              <TabPanel p={0}>
                <PostList />
              </TabPanel>
              <TabPanel p={0}>
                <MediaList />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box width="20%">
          <RightSidebarProfile />
        </Box>
      </Flex>
    </>
  );
}

import {
  Box,
  Button,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { RiUserSearchLine } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { ModalFormPosting } from "../../post/component/modal-form-posting";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/use-store";
import { removeUser } from "../../../store/auth-slice";

export function LeftSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <Box
      width={"290px"}
      height={"100vh"}
      position={"fixed"}
      borderRight={"1px solid #545454"}
    >
      <Heading
        as="h1"
        marginLeft={"20px"}
        // mx="auto"
        color="brand.green"
        width={"180px"}
        display={"flex"}
        fontSize={"40px"}
        paddingTop={"25px"}
        alignItems="start"
        paddingBottom={"5px"}
        justifyContent="start"
      >
        circle
      </Heading>

      <UnorderedList
        gap={"30px"}
        width={"235px"}
        display={"flex"}
        fontSize={"20px"}
        color={"fonts.color"}
        marginTop={"15px"}
        listStyleType={"none"}
        flexDirection={"column"}
      >
        <ListItem
          cursor={"pointer"}
          onClick={() => navigate("/home")}
          gap={"5px"}
          alignItems={"center"}
          textDecoration={"none"}
          color={"white"}
          display={"flex"}
        >
          <FaHome style={{ marginRight: "10px" }} />
          Home
        </ListItem>

        <ListItem
          as={"a"}
          href="#"
          gap={"5px"}
          color={"white"}
          display={"flex"}
          alignItems={"center"}
          textDecoration={"none"}
        >
          <RiUserSearchLine style={{ marginRight: "10px" }} />
          Search
        </ListItem>

        <ListItem
          as={"a"}
          href="#"
          gap={"5px"}
          color={"white"}
          display={"flex"}
          alignItems={"center"}
          textDecoration={"none"}
        >
          <IoHeartOutline style={{ marginRight: "10px" }} />
          Follows
        </ListItem>

        <ListItem
          cursor={"pointer"}
          onClick={() => navigate("/profile")}
          gap={"5px"}
          color={"white"}
          display={"flex"}
          alignItems={"center"}
          textDecoration={"none"}
        >
          <CgProfile style={{ marginRight: "10px" }} />
          Profile
        </ListItem>

        <ListItem
          as={"a"}
          href="#"
          gap={"5px"}
          color={"white"}
          display={"flex"}
          alignItems={"center"}
          textDecoration={"none"}
        >
          <Button
            width={"95%"}
            border={"none"}
            height={"35px"}
            color={"fonts.color"}
            fontSize={"15px"}
            colorScheme="blue"
            fontWeight={"bold"}
            borderRadius={"20px"}
            backgroundColor={"brand.green"}
            onClick={onOpen}
          >
            <ModalFormPosting isOpen={isOpen} onClose={onClose} />
            Create Post
          </Button>
        </ListItem>
      </UnorderedList>

      <Text
        gap={"15px"}
        width={"235px"}
        display={"flex"}
        color={"fonts.color"}
        fontSize={"20px"}
        marginTop={"530px"}
        marginLeft={"20px"}
        alignItems={"center"}
        textDecoration={"none"}
        cursor={"pointer"}
        onClick={() => {
          dispatch(removeUser());
          navigate("/auth/login");
        }}
      >
        <TbLogout2 />
        Logout
      </Text>
    </Box>
  );
}

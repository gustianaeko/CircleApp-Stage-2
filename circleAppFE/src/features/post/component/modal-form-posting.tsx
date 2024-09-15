import {
  Avatar,
  Button,
  Divider,
  Flex,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { LuImagePlus } from "react-icons/lu";

interface ModalFormPostingProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalFormPosting({ isOpen, onClose }: ModalFormPostingProps) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent bg={"brand.modalColor"}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton color={"white"} size={"sm"} />
          <ModalBody>
            <form encType="multipart/form-data">
              <FormControl color="white">
                <Flex mb={10}>
                  <Avatar
                    w="40px"
                    h="40px"
                    src="https://static.vecteezy.com/system/resources/previews/009/749/878/non_2x/woman-profile-mascot-illustration-female-avatar-icon-cartoon-girl-head-face-business-user-logo-free-vector.jpg"
                  />
                  <Textarea
                    placeholder="What's Happening ?!"
                    border="none"
                    fontSize="20px"
                    w="70vh"
                    resize="none"
                    sx={{
                      "::placeholder": {
                        color: "rgba(144, 144, 144, 1)",
                      },
                    }}
                    minH="45px"
                    name="content"
                  ></Textarea>
                </Flex>
                <Divider
                  borderBottom="1px solid rgba(144, 144, 144, .5)"
                  mt={4}
                />

                <Flex mt={5} pb={5} justifyContent={"space-between"}>
                  <label htmlFor="imageUpload">
                    <LuImagePlus
                      size={24}
                      color="rgba(4, 165, 30, 1)"
                      style={{ marginTop: "5px" }}
                      cursor="pointer"
                    />
                  </label>
                  <Input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    display="none"
                    name=""
                  />

                  <Button
                    borderRadius="full"
                    bg="rgba(4, 165, 30, 1)"
                    color="white"
                    fontSize="14px"
                    w="63px"
                    h="33px"
                    ml="20px"
                    type="submit"
                  >
                    Post
                  </Button>
                </Flex>
              </FormControl>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

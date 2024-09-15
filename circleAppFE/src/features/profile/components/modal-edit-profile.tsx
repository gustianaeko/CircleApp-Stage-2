import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import React from "react";

interface ModalFormEditProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditProfileModal({
  isOpen,
  onClose,
}: ModalFormEditProfileProps) {
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
        <ModalContent bg={"brand.modalColor"} marginTop={"90px"}>
          <ModalHeader color={"rgba(144, 144, 144, 1)"}>
            Edit profile
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent="center" mb={4}>
              <Avatar
                size="2xl"
                src="https://static.vecteezy.com/system/resources/previews/009/749/878/non_2x/woman-profile-mascot-illustration-female-avatar-icon-cartoon-girl-head-face-business-user-logo-free-vector.jpg"
              />
            </Flex>
            <FormControl mb={3}>
              <FormLabel color={"rgba(144, 144, 144, 1)"}>Name</FormLabel>
              <Input
                placeholder="✨ Stella Audhina ✨"
                border={"1px solid rgba(144, 144, 144, 1)"}
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel color={"rgba(144, 144, 144, 1)"}>Username</FormLabel>
              <Input
                placeholder="audhinafh"
                border={"1px solid rgba(144, 144, 144, 1)"}
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel color={"rgba(144, 144, 144, 1)"}>Bio</FormLabel>
              <Textarea
                placeholder="picked over by the worms, and weird fishes"
                border={"1px solid rgba(144, 144, 144, 1)"}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

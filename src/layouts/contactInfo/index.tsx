import React, { useState } from "react";
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Avatar, Box, Button, Divider, IconButton, Stack, Switch, Text } from "@chakra-ui/react"
import { IoClose } from "react-icons/io5";
import { useApi } from "../../components";
import { faker } from "@faker-js/faker";
import { Ban, Bell, ChevronRight, Phone, Star, Trash, Video, } from 'lucide-react';
import { useAppContext } from "../../components/management/appState";

const BlockDialog = ({ isOpen, onClose, cancelRef }: { isOpen: boolean, onClose: any, cancelRef: any } ) => {
  return (
    <AlertDialog
      motionPreset='slideInBottom'
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent bg='white'>
        <AlertDialogHeader>Block Contact?</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          Are you sure you want to block this contact?
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button colorScheme="none" onClick={onClose}>
            No
          </Button>
          <Button colorScheme='red' ml={3}>
            Yes
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

const DeleteDialog = ({ isOpen, onClose, cancelRef }: { isOpen: boolean, onClose: any, cancelRef: any } ) => {
  return (
    <AlertDialog
      motionPreset='slideInBottom'
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent bg='white'>
        <AlertDialogHeader>Delete Message?</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          Are you sure you want to delete this message?
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button onClick={onClose}>
            No
          </Button>
          <Button colorScheme='red' ml={3}>
            Yes
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

const index = () => {
  const { toggleSidebar } = useApi();
  const { dispatch } = useAppContext();

  const [openBlock, setOpenBlock] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const cancelRef = React.useRef()

  const handleCloseBlock = () => {
    setOpenBlock(false);
  }

  const handleCloseDelete = () => {
    setOpenDelete(false);
  }

  return (
    <Box w="20rem" h="100%">
      <Stack h="100%">
        <Box shadow="md" w="100%" bg="white">
          <Stack
            direction="row"
            p="2"
            h="64px"
            alignItems="center"
            justifyContent="space-between"
            spacing="3"
          >
            <Text className="text-base font-medium">Contact Info</Text>
            <IconButton
              onClick={toggleSidebar}
              size="sm"
              aria-label="close div"
              isRound={true}
              variant="solid"
              icon={<IoClose />}
              _hover={{ color: "purple.300" }}
              _active={{}}
            ></IconButton>
          </Stack>
        </Box>

        <Stack
          pos={"relative"}
          flexGrow={1}
          overflowY={"scroll"}
          p={3}
          spacing={3}
        >
          <Stack alignItems={"center"} dir="row" spacing={2}>
            <Avatar
              name={faker.person.fullName()}
              className="inline-block rounded-full ring-1 ring-white cursor-pointer"
              size={["sm", "md"]}
              src={faker.image.avatar()}
            ></Avatar>
            <Stack alignItems="center" spacing={0.5}>
              <Text className="text-sm font-medium" fontWeight="medium">
                {faker.person.fullName()}
              </Text>
              <Text className="text-sm font-light" fontWeight="light">
                {faker.phone.number()}
              </Text>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Stack
              spacing={1}
              alignItems={"center"}
              cursor="pointer"
              className="text-neutral-600"
            >
              <Video width={"16px"} size={"xs"} />
              <p className="text-xs">Video</p>
            </Stack>
            <Stack
              spacing={1}
              alignItems={"center"}
              cursor="pointer"
              className="text-neutral-600"
            >
              <Phone width={"16px"} size={"xs"} />
              <p className="text-xs">Voice</p>
            </Stack>
          </Stack>

          <Divider />

          <Stack spacing={0.5}>
            <Text className="text-sm font-medium">About</Text>
            <Text className="text-sm text-neutral-600">
              Imagination is the only limit
            </Text>
          </Stack>

          <Divider />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text className="text-sm font-medium">Media, Links & Docs</Text>
            <button
              onClick={() => {
                dispatch({
                  type: "UPDATE_SIDEBAR_TYPE",
                  payload: { type: "SHARED" },
                });
              }}
              className="flex gap-1 items-center justify-center text-xs cursor-pointer rounded-lg hover:bg-neutral-300 hover:text-white p-1"
            >
              401
              <ChevronRight width={"18px"} size={"xs"} />
            </button>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems="center">
            {[1, 2, 3].map(() => (
              <Box>
                <img src={faker.image.food()} alt={faker.person.fullName()} />
              </Box>
            ))}
          </Stack>

          <Divider />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Star width={"16px"} size={"xs"} />
              <p className="text-sm font-medium">Starred Messages</p>
            </Stack>
            <button className="items-center justify-center text-xs cursor-pointer rounded-lg hover:bg-neutral-300 hover:text-white p-1">
              <ChevronRight
                onClick={() => {
                  dispatch({
                    type: "UPDATE_SIDEBAR_TYPE",
                    payload: { type: "STARRED" },
                  });
                }}
                width={"18px"}
                size={"xs"}
              />
            </button>
          </Stack>

          <Divider />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Bell width={"16px"} size={"xs"} />
              <p className="text-sm font-medium">Notifications</p>
            </Stack>
            <Switch size="sm" colorScheme="gray" />
          </Stack>

          <Divider />

          <Stack spacing={3}>
            <Text className="text-sm font-medium">1 group(s) in common</Text>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar
                name={faker.person.fullName()}
                className="inline-block rounded-full ring-1 ring-white cursor-pointer"
                size={"sm"}
                src={faker.image.avatar()}
              ></Avatar>
              <Stack spacing={0.5}>
                <Text className="text-sm font-medium" fontWeight="medium">
                  Coding Monk
                </Text>
                <Text className="text-sm font-light" fontWeight="light">
                  Oba, Deife, Shalom
                </Text>
              </Stack>
            </Stack>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2} mt={8}>
            <button
              onClick={() => {
                setOpenBlock(true);
              }}
              className="flex gap-1.5 w-full items-center justify-center text-xs cursor-pointer rounded-lg border border-neutral-200 text-neutral-500 bg-transparent hover:text-white hover:bg-red-500 px-1 py-2.5"
            >
              <Ban width={"18px"} size={"xs"} />
              Block
            </button>
            <button
              onClick={() => {
                setOpenDelete(true);
              }}
              className="flex gap-1.5 w-full items-center justify-center text-xs cursor-pointer rounded-lg border border-neutral-200 text-neutral-500 bg-transparent hover:text-white hover:bg-red-700 px-1 py-2.5"
            >
              <Trash width={"18px"} size={"xs"} />
              Delete
            </button>
          </Stack>
        </Stack>
      </Stack>

      {openBlock && (
        <BlockDialog isOpen={openBlock} onClose={handleCloseBlock} cancelRef={cancelRef} />
      )}

      {openBlock && (
        <DeleteDialog isOpen={openDelete} onClose={handleCloseDelete} cancelRef={cancelRef} />
      )}
    </Box>
  );
}

export default index
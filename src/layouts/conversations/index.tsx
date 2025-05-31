// import { useMemo } from "react";
// import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack,  } from "@chakra-ui/react"
// import { DefaultInput, Header } from "../../components"
// import { RiSendPlaneFill } from "react-icons/ri";
// import { Messages } from "..";
// import { HiUserPlus } from "react-icons/hi2";
// import { IoDocumentText } from "react-icons/io5";
// import { FaImages } from "react-icons/fa6";
// import { MdLibraryMusic } from "react-icons/md";
// import { TbCameraFilled } from "react-icons/tb";
// import { PiPaperclipBold } from "react-icons/pi";


// const index = () => {
//     const emojiPickerTop = useMemo(() => ['40%', '38%', '39%', '40%', '45%'], []);
//     const emojiPickerLeft = useMemo(() => ['30%', '58%', '65%', '75%', '80%'], []);
    
//     const handleBlur = () => {
//         // Do something when the input field loses focus
//     };
  
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         // Do something when the input value changes
//         console.log(e)
//     };

//   return (
//     <Stack className="h-full max-h-full w-auto rounded-r-xl relative">
//         {/* HEADER */}
//         <Header />

//         {/* CHAT/MESSAGE SECTION */}
//         <Box className="w-full trick" flexGrow='1' h='100%' overflowX='hidden' overflowY='scroll'>
//             <Messages />
//         </Box>

//         {/* INPUTFIELD */}
//         <Box className="w-full h-16 px-2">
//             <Stack direction='row' alignItems='center' spacing='0'>
//                 <Menu autoSelect={false} flip={true}>
//                     <MenuList border='none' shadow='md' bg='white' zIndex='1000' display='grid' gap='5' py='4' px='2' gridTemplateColumns='repeat(3, 1fr)' gridTemplateRows='repeat(2, 1fr)'>
//                         <MenuItem display='flex' color='purple.400' alignItems='center' justifyContent='center' flexDirection='column' gap='1' w='max-content' p='1' borderRadius='xl' fontSize='smaller'>
//                             <HiUserPlus  size='30' className="mx-auto p-1.5 rounded-full text-white bg-sky-500"/>
//                             Contacts
//                         </MenuItem>
//                         <MenuItem display='flex' color='purple.400' alignItems='center' justifyContent='center' flexDirection='column' gap='1' w='max-content' p='1' borderRadius='xl' fontSize='smaller'>
//                             <FaImages className="mx-auto p-1.5 text-3xl rounded-full text-white bg-purple-400"/>
//                             Gallery
//                         </MenuItem>
//                         <MenuItem display='flex' color='purple.400' alignItems='center' justifyContent='center' flexDirection='column' gap='1' w='max-content' p='1' borderRadius='xl' fontSize='smaller'>
//                             <IoDocumentText className="mx-auto p-1.5 text-3xl rounded-full text-white "/>
//                             Document
//                         </MenuItem>
//                         <MenuItem display='flex' color='purple.400' alignItems='center' justifyContent='center' flexDirection='column' gap='1' w='max-content' p='1' borderRadius='xl' fontSize='smaller'>
//                             <MdLibraryMusic  size='30' className="mx-auto p-1.5 rounded-full text-white bg-orange-500"/>
//                             Audio
//                         </MenuItem>
//                         <MenuItem display='flex' color='purple.400' alignItems='center' justifyContent='center' flexDirection='column' gap='1' w='max-content' p='1' borderRadius='xl' fontSize='smaller'>
//                             <TbCameraFilled  size='30' className="mx-auto p-1.5 rounded-full text-white bg-rose-500"/>
//                             Camera
//                         </MenuItem>
//                         {/* <MenuItem display='flex' color='purple.400' alignItems='center' justifyContent='center' flexDirection='column' gap='1' w='max-content' p='1' borderRadius='xl' fontSize='smaller' _focus={{ outline: 'none' }}>
//                             <HiUserPlus  size='30' className="mx-auto p-1.5 rounded-full text-white bg-sky-500"/>
//                             Open Tab
//                         </MenuItem> */}
//                     </MenuList>
//                     <MenuButton as={IconButton} 
//                         aria-label='Attach file'
//                         icon={<PiPaperclipBold />}
//                         cursor='pointer'
//                         size='xs'
//                         fontSize='20px'
//                         // onClick={}
//                         variant="filled"
//                         // color="purple.300"
//                         className="w-11 flex items-center justify-center text-white bg-purple-600/90"
//                         border='purple.400'
//                         borderRadius='lg'
//                         p='2'
//                         h='41px'
//                         _hover={
//                         { }
//                         }
//                         _active={
//                         { }
//                         }
//                     />
//                 </Menu>
//                 <DefaultInput height='44px' width="100%" name='chat' value="" type='text' showAttachIcon={true} emojiPickerResponsive={true} emojiPickerTop={emojiPickerTop} emojiPickerLeft={emojiPickerLeft} placeholder="Message" focusBorderColor='purple.300' className='flex items-center hover:border-purple-300 focus-within:bg-white text-base' onBlur={handleBlur} onChange={handleChange} />
//                 <Box className="h-[41px] w-11 flex items-center justify-center bg-purple-600/85" borderRadius='lg'>
//                     <IconButton bg='none' color='white' _hover={{ bg: 'none' }} aria-label="Send Message">
//                         <RiSendPlaneFill fontSize='22px' />
//                     </IconButton>
//                 </Box> 
//             </Stack>
//         </Box>
//     </Stack>
//   )
// }

// export default index



















import type React from "react"

import { useState } from "react"
import {
  Box,
  Stack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
//   useBreakpointValue,
  Flex,
  Text,
} from "@chakra-ui/react"
import { RiSendPlaneFill } from "react-icons/ri"
import { UserPlus } from "lucide-react"
import { IoDocumentText } from "react-icons/io5"
import { FaImages } from "react-icons/fa6"
import { MdLibraryMusic } from "react-icons/md"
import { TbCameraFilled } from "react-icons/tb"
import { PiPaperclipBold } from "react-icons/pi"
import { DefaultInput, Header } from "../../components"
import { Messages } from "..";

const Conversations = () => {
  const [message, setMessage] = useState("")
//   const isMobile = useBreakpointValue({ base: true, md: false })

//   const emojiPickerTop = useMemo(() => ["40%", "38%", "39%", "40%", "45%"], [])
//   const emojiPickerLeft = useMemo(() => ["30%", "58%", "65%", "75%", "80%"], [])

  const handleBlur = () => {
    // Handle blur
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const handleSend = () => {
    if (message.trim()) {
      // Send message logic
      setMessage("")
    }
  }

  return (
    <Stack h="100%" maxH="100%" w="100%" spacing={0}>
      {/* Header */}
      <Header />

      {/* Messages Area */}
      <Box flex="1" overflowY="auto" css={{ "&::-webkit-scrollbar": { width: "6px", }, "&::-webkit-scrollbar-track": { background: "transparent", }, "&::-webkit-scrollbar-thumb": { background: "#E2E8F0", borderRadius: "3px", }, }} >
        <Messages />
      </Box>

      {/* Input Area */}
      <Box p={{ base: 3, md: 4 }} borderTop="1px" borderColor="gray.100">
        <Flex align="center" gap={2}>
          {/* Attachment Menu */}
          <Menu>
            <MenuButton as={IconButton} aria-label="Attach file" icon={<PiPaperclipBold />} size="sm" bg="purple.400" color="white" _hover={{ bg: "purple.700" }} _active={{ bg: "purple.700" }} borderRadius="lg" minW="44px" h="44px" />
            <MenuList border="none" shadow="lg" bg="white" p={3} borderRadius="xl" display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={3} minW="240px" >
              <MenuItem display="flex" flexDirection="column" alignItems="center" gap={2} p={3} borderRadius="lg" _hover={{ bg: "gray.50" }} _focus={{ bg: "gray.50" }} >
                <Box p={2} bg="blue.500" borderRadius="full" color="white">
                  <UserPlus size={20} />
                </Box>
                <Text fontSize="xs" color="gray.600">
                  Contacts
                </Text>
              </MenuItem>

              <MenuItem display="flex" flexDirection="column" alignItems="center" gap={2} p={3} borderRadius="lg" _hover={{ bg: "gray.50" }} _focus={{ bg: "gray.50" }} >
                <Box p={2} bg="purple.500" borderRadius="full" color="white">
                  <FaImages size={20} />
                </Box>
                <Text fontSize="xs" color="gray.600">
                  Gallery
                </Text>
              </MenuItem>

              <MenuItem display="flex" flexDirection="column" alignItems="center" gap={2} p={3} borderRadius="lg" _hover={{ bg: "gray.50" }} _focus={{ bg: "gray.50" }} >
                <Box p={2} bg="violet.400" className="bg-violet-500" borderRadius="full" color="white">
                  <IoDocumentText size={20} />
                </Box>
                <Text fontSize="xs" color="gray.600">
                  Document
                </Text>
              </MenuItem>

              <MenuItem display="flex" flexDirection="column" alignItems="center" gap={2} p={3} borderRadius="lg" _hover={{ bg: "gray.50" }} _focus={{ bg: "gray.50" }} >
                <Box p={2} bg="orange.500" borderRadius="full" color="white">
                  <MdLibraryMusic size={20} />
                </Box>
                <Text fontSize="xs" color="gray.600">
                  Audio
                </Text>
              </MenuItem>

              <MenuItem display="flex" flexDirection="column" alignItems="center" gap={2} p={3} borderRadius="lg" _hover={{ bg: "gray.50" }} _focus={{ bg: "gray.50" }} >
                <Box p={2} bg="rose.500" className="bg-rose-500" borderRadius="full" color="white">
                  <TbCameraFilled size={20} />
                </Box>
                <Text fontSize="xs" color="gray.600">
                  Camera
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>

          {/* Message Input */}
          <Box flex="1">
            <DefaultInput height="44px" name="message" value={message} type="text" showAttachIcon={true} placeholder="Type a message..." focusBorderColor="purple.400" borderColor="gray.300" bgColor="gray.50" onBlur={handleBlur} onChange={handleChange} className="focus-within:bg-white" />
          </Box>

          {/* Send Button */}
          <IconButton aria-label="Send message" icon={<RiSendPlaneFill />} size="sm" bg="purple.400" color="white" _hover={{ bg: "purple.700" }} _active={{ bg: "purple.700" }} borderRadius="lg" minW="44px" h="44px" onClick={handleSend} isDisabled={!message.trim()} />
        </Flex>
      </Box>
    </Stack>
  )
}

export default Conversations
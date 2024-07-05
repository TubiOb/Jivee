import { useMemo } from "react";
import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack,  } from "@chakra-ui/react"
import { DefaultInput, Header } from "../../components"
import { RiSendPlaneFill } from "react-icons/ri";
import { Messages } from "..";
import { HiUserPlus } from "react-icons/hi2";
import { IoDocumentText } from "react-icons/io5";
import { FaImages } from "react-icons/fa6";
import { MdLibraryMusic } from "react-icons/md";
import { TbCameraFilled } from "react-icons/tb";
import { PiPaperclipBold } from "react-icons/pi";


const index = () => {
    const emojiPickerTop = useMemo(() => ['40%', '38%', '39%', '40%', '45%'], []);
    const emojiPickerLeft = useMemo(() => ['30%', '58%', '65%', '75%', '80%'], []);
    
    const handleBlur = () => {
        // Do something when the input field loses focus
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Do something when the input value changes
        console.log(e)
    };

  return (
    <Stack className="h-full max-h-full w-auto rounded-r-xl relative">
        {/* HEADER */}
        <Header />

        {/* CHAT/MESSAGE SECTION */}
        <Box className="w-full trick" flexGrow='1' h='100%' overflowX='hidden' overflowY='scroll'>
            <Messages />
        </Box>

        {/* INPUTFIELD */}
        <Box className="w-full h-16 px-2">
            <Stack direction='row' alignItems='center' spacing='0'>
                <Menu autoSelect={false} flip={true}>
                    <MenuList border='none' shadow='md' bg='white' zIndex='1000' display='grid' gap='5' py='4' px='2' gridTemplateColumns='repeat(3, 1fr)' gridTemplateRows='repeat(2, 1fr)'>
                        <MenuItem display='flex' color='purple.400' alignItems='center' justifyContent='center' flexDirection='column' gap='1' w='max-content' p='1' borderRadius='xl' fontSize='smaller'>
                            <HiUserPlus  size='30' className="mx-auto p-1.5 rounded-full text-white bg-sky-500"/>
                            Contacts
                        </MenuItem>
                        <MenuItem display='flex' color='purple.400' alignItems='center' justifyContent='center' flexDirection='column' gap='1' w='max-content' p='1' borderRadius='xl' fontSize='smaller'>
                            <FaImages className="mx-auto p-1.5 text-3xl rounded-full text-white bg-purple-400"/>
                            Gallery
                        </MenuItem>
                        <MenuItem display='flex' color='purple.400' alignItems='center' justifyContent='center' flexDirection='column' gap='1' w='max-content' p='1' borderRadius='xl' fontSize='smaller'>
                            <IoDocumentText className="mx-auto p-1.5 text-3xl rounded-full text-white bg-violet-500"/>
                            Document
                        </MenuItem>
                        <MenuItem display='flex' color='purple.400' alignItems='center' justifyContent='center' flexDirection='column' gap='1' w='max-content' p='1' borderRadius='xl' fontSize='smaller'>
                            <MdLibraryMusic  size='30' className="mx-auto p-1.5 rounded-full text-white bg-orange-500"/>
                            Audio
                        </MenuItem>
                        <MenuItem display='flex' color='purple.400' alignItems='center' justifyContent='center' flexDirection='column' gap='1' w='max-content' p='1' borderRadius='xl' fontSize='smaller'>
                            <TbCameraFilled  size='30' className="mx-auto p-1.5 rounded-full text-white bg-rose-500"/>
                            Camera
                        </MenuItem>
                        {/* <MenuItem display='flex' color='purple.400' alignItems='center' justifyContent='center' flexDirection='column' gap='1' w='max-content' p='1' borderRadius='xl' fontSize='smaller' _focus={{ outline: 'none' }}>
                            <HiUserPlus  size='30' className="mx-auto p-1.5 rounded-full text-white bg-sky-500"/>
                            Open Tab
                        </MenuItem> */}
                    </MenuList>
                    <MenuButton as={IconButton} 
                        aria-label='Attach file'
                        icon={<PiPaperclipBold />}
                        cursor='pointer'
                        size='xs'
                        fontSize='20px'
                        // onClick={}
                        variant="filled"
                        // color="purple.300"
                        className="w-11 flex items-center justify-center text-white bg-purple-600/90"
                        border='purple.400'
                        borderRadius='lg'
                        p='2'
                        h='41px'
                        _hover={
                        { }
                        }
                        _active={
                        { }
                        }
                    />
                </Menu>
                <DefaultInput height='44px' width="100%" name='chat' value="" type='text' showAttachIcon={true} emojiPickerResponsive={true} emojiPickerTop={emojiPickerTop} emojiPickerLeft={emojiPickerLeft} placeholder="Message" focusBorderColor='purple.300' className='flex items-center hover:border-purple-300 focus-within:bg-white text-base' onBlur={handleBlur} onChange={handleChange} />
                <Box className="h-[41px] w-11 flex items-center justify-center bg-purple-600/85" borderRadius='lg'>
                    <IconButton bg='none' color='white' _hover={{ bg: 'none' }} aria-label="Send Message">
                        <RiSendPlaneFill fontSize='22px' />
                    </IconButton>
                </Box> 
            </Stack>
        </Box>
    </Stack>
  )
}

export default index
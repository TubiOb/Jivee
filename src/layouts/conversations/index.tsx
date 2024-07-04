import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack,  } from "@chakra-ui/react"
import { DefaultInput, Header } from "../../components"
import { CiLocationArrow1 } from "react-icons/ci";
import { Messages } from "..";
import { TfiClip } from "react-icons/tfi";


const index = () => {
    const handleBlur = () => {
        // Do something when the input field loses focus
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Do something when the input value changes
        console.log(e)
    };

  return (
    <Stack className="h-full max-h-full w-auto rounded-r-xl">
        {/* HEADER */}
        <Header />

        {/* CHAT/MESSAGE SECTION */}
        <Box className="w-full trick" flexGrow='1' h='100%' position='relative' overflowY='scroll'>
            <Messages />
        </Box>

        {/* INPUTFIELD */}
        <Box className="w-full h-16 px-2 relative">
            <Stack direction='row' alignItems='center' spacing='0'>
                <Menu>
                    <MenuButton as={IconButton} 
                        aria-label='attach'
                        icon={<TfiClip />}
                        cursor='pointer'
                        size='xs'
                        fontSize='20px'
                        // onClick={}
                        // variant="ghost"
                        color="purple.300"
                        className="h-11 w-11 flex items-center justify-center bg-transparent border-purple-600"
                        // border='purple.400'
                        borderRadius='lg'
                        p='2'
                        h='44px'
                        _hover={
                        { }
                        }
                        _active={
                        { }
                        }
                    />
                    <MenuList border='none' shadow='md' bg='white' bottom='200%' zIndex='1000' display='grid' gap='5' py='4' px='2' gridTemplateColumns='repeat(3, 1fr)' gridTemplateRows='repeat(2, 1fr)'>
                        <MenuItem display='flex' flexDirection='column' gap='3' w='max-content' fontSize='smaller' icon={<TfiClip  size='18'/>}>
                        Open Tab
                        </MenuItem>
                        <MenuItem display='flex' flexDirection='column' gap='3' w='max-content' fontSize='smaller' icon={<TfiClip  size='18'/>}>
                        Open Tab
                        </MenuItem>
                        <MenuItem display='flex' flexDirection='column' gap='3' w='max-content' fontSize='smaller' icon={<TfiClip  size='18'/>}>
                        Open Tab
                        </MenuItem>
                        <MenuItem display='flex' flexDirection='column' gap='3' w='max-content' fontSize='smaller' icon={<TfiClip  size='18'/>}>
                        Open Tab
                        </MenuItem>
                        <MenuItem display='flex' flexDirection='column' gap='3' w='max-content' fontSize='smaller' icon={<TfiClip  size='18'/>}>
                        Open Tab
                        </MenuItem>
                        <MenuItem display='flex' flexDirection='column' gap='3' w='max-content' fontSize='smaller' icon={<TfiClip  size='18'/>}>
                        Open Tab
                        </MenuItem>
                    </MenuList>
                </Menu>
                <DefaultInput height='44px' width="100%" name='chat' value="" type='text' showAttachIcon={true} emojiPickerResponsive={true} placeholder="Message" focusBorderColor='purple.300' className='flex items-center hover:border-purple-300 focus-within:bg-white text-base' onBlur={handleBlur} onChange={handleChange} />
                <Box className="h-11 w-11 flex items-center justify-center bg-purple-600/85" borderRadius='lg'>
                    <IconButton bg='none' color='white' _hover={{ bg: 'none' }} aria-label="Send Message">
                        <CiLocationArrow1 fontSize='20px' />
                    </IconButton>
                </Box> 
            </Stack>
        </Box>
    </Stack>
  )
}

export default index
import { Avatar, AvatarBadge, Box, Divider, IconButton, Stack, Text, /* useBreakpointValue */ } from "@chakra-ui/react"
import { faker } from "@faker-js/faker"
import { HiOutlineVideoCamera } from "react-icons/hi"
import { IoSearchOutline } from "react-icons/io5"
import { MdOutlineCall, MdOutlineKeyboardArrowDown, /* MdKeyboardArrowLeft */ } from "react-icons/md"
import useApi from "../management/useApi"


const chatHeader = () => {
    const { toggleSidebar } = useApi();
    // const displayValue = useBreakpointValue({ base: "none", md: "flex" });
  return (
    <Box className='w-full h-16 p-2 shadow-md shadow-neutral-300'>
        <Stack className="w-full h-full" alignItems='center' justifyContent='space-between' direction='row'>
            <Stack onClick={toggleSidebar} direction='row' spacing={2} cursor='pointer'>
                {/* <Box>
                    <IconButton bg='none' size='md' isRound={true} color='purple.500' _hover={{ bg: 'gray.100', color: 'purple.300' }} aria-label='Back button'>
                        <MdKeyboardArrowLeft fontSize='20px' />
                    </IconButton>
                </Box> */}
                <Box>
                    <Avatar name="" className="inline-block rounded-full ring-1 ring-white cursor-pointer" size={['sm', 'md']} src={faker.image.avatar()}>
                        <AvatarBadge boxSize='.85rem' className='bg-purple-500/90 avatar-badge-ripple' />
                    </Avatar>
                </Box>

                <Stack spacing={0.2}>
                    <Text fontSize='sm' className='font-medium'>{faker.name.fullName()}</Text>
                    <Text fontSize='xs' className=''>Online</Text>
                </Stack>
            </Stack>
            <Stack /* display={displayValue} */ direction='row' alignItems='center' spacing={[1, 3]}>
                <IconButton bg='none' size='sm' isRound={true} _hover={{ bg: 'gray.100', color: 'purple.300' }} p='1' aria-label='video call'>
                    <HiOutlineVideoCamera className="text-base lg:text-xl" />
                </IconButton>
                <IconButton bg='none' size='sm' isRound={true} _hover={{ bg: 'gray.100', color: 'purple.300' }} p='1' aria-label='call'>
                    <MdOutlineCall className="text-base lg:text-xl" />
                </IconButton>
                <IconButton bg='none' size='sm' isRound={true} _hover={{ bg: 'gray.100', color: 'purple.300' }} p='1' aria-label='search'>
                    <IoSearchOutline className="text-base lg:text-xl" />
                </IconButton>
                <Box display="flex" alignItems="center">
                    <Divider orientation='vertical' width="auto" height="35px" className="bg-neutral-100" />
                </Box>
                <IconButton bg='none' size='sm' isRound={true} _hover={{ bg: 'gray.100', color: 'purple.300' }} p='1' aria-label='search'>
                    <MdOutlineKeyboardArrowDown className="text-base lg:text-xl" />
                </IconButton>
            </Stack>
        </Stack>
    </Box>
  )
}

export default chatHeader
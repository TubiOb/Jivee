import { Avatar, AvatarBadge, Box, Divider, IconButton, Stack, Text } from "@chakra-ui/react"
import { faker } from "@faker-js/faker"
import { HiOutlineVideoCamera } from "react-icons/hi"
import { IoSearchOutline } from "react-icons/io5"
import { MdOutlineCall, MdOutlineKeyboardArrowDown } from "react-icons/md"


const chatHeader = () => {
  return (
    <Box className='w-full rounded-tr-xl p-2 shadow-md shadow-neutral-300'>
        <Stack className="w-full h-full" alignItems='center' justifyContent='space-between' direction='row'>
            <Stack direction='row' spacing={2}>
                <Box>
                    <Avatar name="" className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src={faker.image.avatar()}>
                        <AvatarBadge boxSize='.85rem' className='bg-purple-500/90 avatar-badge-ripple' />
                    </Avatar>
                </Box>

                <Stack spacing={0.2}>
                    <Text fontSize='sm' className='font-medium'>{faker.name.fullName()}</Text>
                    <Text fontSize='xs' className=''>Online</Text>
                </Stack>
            </Stack>
            <Stack direction='row' alignItems='center' spacing={3}>
                <IconButton bg='none' size='md' isRound={true} _hover={{ bg: 'purple.300', color: 'white' }} aria-label='video call'>
                    <HiOutlineVideoCamera fontSize='20px' />
                </IconButton>
                <IconButton bg='none' size='md' isRound={true} _hover={{ bg: 'purple.300', color: 'white' }} aria-label='call'>
                    <MdOutlineCall fontSize='20px' />
                </IconButton>
                <IconButton bg='none' size='md' isRound={true} _hover={{ bg: 'purple.300', color: 'white' }} aria-label='search'>
                    <IoSearchOutline fontSize='20px' />
                </IconButton>
                <Box display="flex" alignItems="center">
                    <Divider orientation='vertical' width="auto" height="35px" className="bg-neutral-100" />
                </Box>
                <IconButton bg='none' size='md' isRound={true} _hover={{ bg: 'purple.300', color: 'white' }} aria-label='search'>
                    <MdOutlineKeyboardArrowDown fontSize='20px' />
                </IconButton>
            </Stack>
        </Stack>
    </Box>
  )
}

export default chatHeader
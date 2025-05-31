import { AbsoluteCenter, Box, Divider, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from "@chakra-ui/react";
import { CiImageOn, CiMenuKebab } from "react-icons/ci";
import { HiOutlineDownload } from "react-icons/hi";


const Timeline = ({el}: any) => {
  return (
    <Stack zIndex='10' position='relative' direction='row' alignItems='center' justifyContent='space-between'>
        <Divider />
        <AbsoluteCenter className="text-neutral-400 text-sm" bg='white' px='2'>
            {el.text}
        </AbsoluteCenter>
    </Stack>
  )
}


const TextMsg = ({el}: any) => {
    return (
        <Stack direction='row' justifyContent={el.incoming ? 'start' : 'end'}>
            {!el.incoming && <MessageOptions />}
            <Box p={1.5} bg={el.incoming ? 'gray.100' : 'purple.400'} borderRadius='lg' shadow='md' w='max-content' overflow='hidden'>

                <Text className="text-sm" color={el.incoming ? 'purple.400' : 'white'}>
                    {el.message}
                </Text>
            </Box>
            {el.incoming && <MessageOptions />}
        </Stack>
    )
}


const MediaMsg = ({el}: any) => {
    return (
        <Stack zIndex='10' direction='row' justifyContent={el.incoming ? 'start' : 'end'}>
            {!el.incoming && <MessageOptions />}
            <Box p={1.5} bg={el.incoming ? 'gray.100' : 'purple.400'} borderRadius='lg' shadow='md' w='max-content'>
                <Stack spacing='1'>
                    <img src={el.img} alt={el.message} className="max-h-36 rounded-md" />
                    <Text className="text-sm" color={el.incoming ? 'purple.400' : 'white'}>
                        {el.message}
                    </Text>
                </Stack>
            </Box>
            {el.incoming && <MessageOptions />}
        </Stack>
    )
}


const ReplyMsg = ({el}: any) => {
    return (
        <Stack direction='row' justifyContent={el.incoming ? 'start' : 'end'}>
            {!el.incoming && <MessageOptions />}
            <Box p={1.5} bg={el.incoming ? 'gray.100' : 'purple.400'} borderRadius='lg' shadow='md' w='max-content'>
                <Stack spacing='2'>
                    <Stack p={2} direction='column' bg='white' spacing='3' alignItems='center' borderRadius='md'>
                        <Text className="text-sm">
                            {el.message}
                        </Text>
                    </Stack>
                    <Text className="text-sm" color={el.incoming ? 'purple.400' : 'white'}>
                        {el.reply}
                    </Text>
                </Stack>
            </Box>
            {el.incoming && <MessageOptions />}
        </Stack>
    )
}


const LinkMsg = ({el}: any) => {
    return (
        <Stack direction='row' justifyContent={el.incoming ? 'start' : 'end'}>
            {!el.incoming && <MessageOptions />}
            <Box p={1.5} bg={el.incoming ? 'gray.100' : 'purple.400'} borderRadius='lg' shadow='md' w='max-content'>
                <Stack spacing='2'>
                    <Stack p={1} spacing={2} bg='gray.100'>
                        <img src={el.preview} alt={el.message} className="max-h-36 rounded-md" />
                        <Stack spacing={.5}>
                            <Text className="text-sm">
                                Creating Chat App
                            </Text>
                            <Link href='https://youtube.com' className="text-sm" color='blue'>
                                www.youtube.com
                            </Link>
                        </Stack>
                        <Text className="text-sm" color={el.incoming ? 'purple.400' : 'white'}>
                            {el.message}
                        </Text>
                    </Stack>
                </Stack>
            </Box>
            {el.incoming && <MessageOptions />}
        </Stack>
    )
}


const DocMsg = ({el}: any) => {
    return (
        <Stack direction='row' justifyContent={el.incoming ? 'start' : 'end'}>
            {!el.incoming && <MessageOptions />}
            <Box p={1.5} bg={el.incoming ? 'gray.100' : 'purple.400'} borderRadius='lg' shadow='md' w='max-content'>
                <Stack spacing='2'>
                    <Stack direction='row' spacing='3' alignItems='center' bg='white' borderRadius='md'>
                        <CiImageOn size='30' />
                        <Text className="text-sm">Abstract.png</Text>
                        <IconButton bg='none' _hover={{ bg: 'none' }} aria-label="Download file">
                            <HiOutlineDownload size='22' opacity='0.7' />
                        </IconButton>
                    </Stack>
                    <Text className="text-sm" color={el.incoming ? 'purple.400' : 'white'}>
                        {el.message}
                    </Text>
                </Stack>
            </Box>
            {el.incoming && <MessageOptions />}
        </Stack>
    )
}


const MessageOptions = () => {
    return (
        <>
            <Menu autoSelect={false} flip={true} matchWidth={true}>
                <MenuButton as={IconButton} 
                    aria-label='Chat Option'
                    cursor='pointer'
                    icon={<CiMenuKebab size={15} />}
                    size='xs'
                    fontSize='20px'
                    // onClick={}
                    variant='ghost'
                    // color="purple.300"
                    className="flex items-center justify-center"
                    _hover={
                    { }
                    }
                    _active={
                    { }
                    }
                />
                <MenuList w='20px' className="menu-list" border='none' display='flex' flexDirection='column' shadow='md' bg='white' zIndex='1000' gap='2' py='3' px='2'>
                    <MenuItem color='purple.400' _hover={{ boxShadow: 'gray.100' }} _focusWithin={{ bg: 'gray.100', }}  py='1' px='2' borderRadius='lg' fontSize='smaller'>
                        Reply
                    </MenuItem>
                    <MenuItem color='purple.400' _hover={{ boxShadow: 'gray.100' }} _focusWithin={{ bg: 'gray.100', }}  py='1' px='2' borderRadius='lg' fontSize='smaller'>
                        React to message
                    </MenuItem>
                    <MenuItem color='purple.400' _hover={{ boxShadow: 'gray.100' }} _focusWithin={{ bg: 'gray.100', }}  py='1' px='2' borderRadius='lg' fontSize='smaller'>
                        Forward
                    </MenuItem>
                    <MenuItem color='purple.400' _hover={{ boxShadow: 'gray.100' }} _focusWithin={{ bg: 'gray.100', }}  py='1' px='2' borderRadius='lg' fontSize='smaller'>
                        Star
                    </MenuItem>
                    <MenuItem color='purple.400' _hover={{ boxShadow: 'gray.100' }} _focusWithin={{ bg: 'gray.100', }}  py='1' px='2' borderRadius='lg' fontSize='smaller'>
                        Delete
                    </MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}

export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg };
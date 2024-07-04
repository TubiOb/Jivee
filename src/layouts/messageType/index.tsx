import { AbsoluteCenter, Box, Divider, IconButton, Link, Stack, Text } from "@chakra-ui/react";
import { CiImageOn } from "react-icons/ci";
import { HiOutlineDownload } from "react-icons/hi";


const Timeline = ({el}: any) => {
  return (
    <Stack position='relative' direction='row' alignItems='center' justifyContent='space-between'>
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
            <Box p={1.5} bg={el.incoming ? 'gray.100' : 'purple.400'} borderRadius='lg' shadow='md' w='max-content'>
                <Text className="text-sm" color={el.incoming ? 'purple.400' : 'white'}>
                    {el.message}
                </Text>
            </Box>
        </Stack>
    )
}


const MediaMsg = ({el}: any) => {
    return (
        <Stack direction='row' justifyContent={el.incoming ? 'start' : 'end'}>
            <Box p={1.5} bg={el.incoming ? 'gray.100' : 'purple.400'} borderRadius='lg' shadow='md' w='max-content'>
                <Stack spacing='1'>
                    <img src={el.img} alt={el.message} className="max-h-36 rounded-md" />
                    <Text className="text-sm" color={el.incoming ? 'purple.400' : 'white'}>
                        {el.message}
                    </Text>
                </Stack>
            </Box>
        </Stack>
    )
}


const ReplyMsg = ({el}: any) => {
    return (
        <Stack direction='row' justifyContent={el.incoming ? 'start' : 'end'}>
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
        </Stack>
    )
}


const LinkMsg = ({el}: any) => {
    return (
        <Stack direction='row' justifyContent={el.incoming ? 'start' : 'end'}>
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
        </Stack>
    )
}


const DocMsg = ({el}: any) => {
    return (
        <Stack direction='row' justifyContent={el.incoming ? 'start' : 'end'}>
            <Box p={1.5} bg={el.incoming ? 'gray.100' : 'purple.400'} borderRadius='lg' shadow='md' w='max-content'>
                <Stack spacing='2'>
                    <Stack direction='row' spacing='3' alignItems='center' bg='white' borderRadius='md'>
                        <CiImageOn size='30' />
                        <Text className="text-sm">Abstract.png</Text>
                        <IconButton bg='none' _hover={{ bg: 'none' }} aria-label="Download file">
                            <HiOutlineDownload size='25' opacity='0.7' />
                        </IconButton>
                    </Stack>
                    <Text className="text-sm" color={el.incoming ? 'purple.400' : 'white'}>
                        {el.message}
                    </Text>
                </Stack>
            </Box>
        </Stack>
    )
}

export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg };
import { Box, IconButton, Stack, Text } from "@chakra-ui/react"
import { IoClose } from "react-icons/io5";
import { useApi } from "../../components";


const index = () => {
  const { toggleSidebar } = useApi();

  return (
    <Box w='20rem' h='100%'>
      <Stack h='100%'>
        {/* HEADER */}
        <Box shadow='md' w='100%' bg='white'>
          <Stack direction='row' p='2' h='64px' alignItems='center' justifyContent='space-between' spacing='3'>
            <Text className="text-lg">Contact Info</Text>
            <IconButton onClick={toggleSidebar} size='sm' aria-label="close div" isRound={true} variant='solid' icon={<IoClose />} _hover={{ color: 'purple.300', }} _active={{ }}>
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default index
import { Box, Stack } from "@chakra-ui/react"
import { Chat_History } from "../../data"
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from "../messageType";


const index = () => {
  return (
    <Box p={3}>
        <Stack spacing={3}>
           {Chat_History.map((el) => {
            switch (el.type) {
                case 'divider':
                    return <Timeline el={el} />;
                case 'msg':
                    switch (el.subtype) {
                        case 'img':
                            return <MediaMsg el={el} />;
                        case 'doc':
                            return <DocMsg el={el} />;
                        case 'link':
                            return <LinkMsg el={el} />;
                        case 'reply':
                            return <ReplyMsg el={el} />;
                        default:
                            return <TextMsg el={el} />;
                    }
                    break;
                default:
                    return <></>
            }
           })} 
        </Stack>
    </Box>
  )
}

export default index
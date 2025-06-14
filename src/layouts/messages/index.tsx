import { Box, Stack } from "@chakra-ui/react"
import { Chat_History } from "../../data"
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from "../messageType";


const index = ({ menu }: any) => {
  return (
    <Box p={3}>
        <Stack spacing={3}>
           {Chat_History.map((el) => {
                switch (el.type) {
                    case 'divider':
                        return <Timeline key={`timeline-${el.id || el.text}`} el={el} menu={menu} />;
                    case 'msg':
                        switch (el.subtype) {
                            case 'img':
                                return <MediaMsg key={`media-${el.id || el.message}`} el={el} menu={menu} />;
                            case 'doc':
                                return <DocMsg key={`doc-${el.id || el.message}`} el={el} menu={menu} />;
                            case 'link':
                                return <LinkMsg key={`link-${el.id || el.message}`} el={el} menu={menu} />;
                            case 'reply':
                                return <ReplyMsg key={`reply-${el.id || el.message}`} el={el} menu={menu} />;
                            default:
                                return <TextMsg key={`text-${el.id || el.message}`} el={el} menu={menu} />;
                        }
                        break;
                    default:
                        return null;
                }
           })} 
        </Stack>
    </Box>
  )
}

export default index
import { Box, Stack, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useAppContext } from "../../components/management/appState";
import { Messages } from "..";

const index = () => {
  const { dispatch } = useAppContext();


  return (
    <Box w="20rem" h="100%">
      <Stack h="100%">
        <Box shadow="md" w="100%" bg="white">
          <Stack direction="row" p="2" h="64px" alignItems="center" justifyContent="space-center" spacing="5" >
            <button onClick={() => { dispatch({ type: "UPDATE_SIDEBAR_TYPE", payload: { type: "CONTACT" }, }); }} className="items-center justify-center text-xs cursor-pointer rounded-lg hover:bg-neutral-300/45 hover:text-white p-1">
              <ChevronLeft width={"18px"} size={"xs"} />
            </button>
            <Text className="text-base font-medium">Starred Messages</Text>
          </Stack>
        </Box>

        <Stack height='100%' pos='relative' flexGrow={1} overflowY={'scroll'}>
          <Messages />
        </Stack>
      </Stack>
    </Box>
  );
};

export default index;

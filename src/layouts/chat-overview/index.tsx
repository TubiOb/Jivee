import { useState } from "react";
import { Jivee, useApi } from "../../components"
// import { motion } from "framer-motion";
import { useTabs } from "../../hooks/use-tabs";
import { Framer } from "../../components/framer/framer";
import { Contact, Conversations, GroupInbox, PersonalInbox, SharedMessages, StarredMessages } from "..";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";


const index = () => {
    const { state } = useApi();
    const isMobile = useBreakpointValue({ base: true, lg: false })
    const sidebarWidth = useBreakpointValue({ base: "100%", lg: "360px", xl: "380px" })

    const [hookProps] = useState({ 
        tabs: [
            { id: 'personal', label: 'Personal', children: <PersonalInbox /> },
            { id: 'group', label: 'Group', children: <GroupInbox /> },
        ],
        initialTabId: 'personal',
    });

    const framer = useTabs(hookProps);
    

  return (
    // <div className="flex flex-row w-full h-full rounded-xl gap-2 items-center justify-start">
    //     <div className="hidden lg:flex flex-col rounded-xl w-full h-full lg:w-[40%] xl:w-[30%] md:shadow-xl py-2 px-3 gap-3 items-center justify-start">
    //         <Jivee />
    //         <div className="w-full relative rounded-xl overflow-hidden flex flex-col gap-2 py-2 flex-grow h-full">
    //             <Framer.Tabs {...framer.tabProps} />
    //             <Box className="trick rounded-none md:rounded-xl py-2 flex-grow overflow-y-scroll h-full">
    //                 {framer.setSelectedTab.children}
                    
    //             </Box>
    //             <button className='flex fixed self-end mr-3 mb-5 bottom-[6%] md:bottom-[8%] xl:bottom-[5%] items-center z-20 cursor-pointer px-2 py-2 group rounded-xl md:shadow-lg outline-none border-none bg-purple-600 dark:bg-purple-600 dark:hover:bg-white gap-1 hover:bg-white text-white dark:hover:text-purple-600 dark:text-white hover:text-purple-600'>
    //                 <BiSolidMessageSquareAdd size={20} /> 
    //             </button>
    //         </div>
    //     </div>
    //     <Box className="flex-1 h-full rounded-r-xl" width={state.sideBar.open ? 'calc(100% - (23.375rem + 30%))' : 'calc(100% - (3.375rem + 30%))'}>
    //         <Conversations />
    //     </Box>

    //     {state.sideBar.open && <Contact />}
    // </div>


    <Flex direction={{ base: "column", lg: "row" }} w="100%" h="100dvh" p={{ base: 0, lg: 1 }} gap={{ base: 0, lg: 2 }} className="rounded-xl" >
        <Box display={{ base: isMobile && state.selectedChat ? "none" : "flex", lg: "flex" }} flexDirection="column" w={{ base: "100%", lg: sidebarWidth }} h={{ base: "100vh", lg: "100dvh" }} bg="white" borderRadius={{ base: 0, lg: "xl" }} shadow={{ base: "none", lg: "lg" }} overflow="hidden" position='relative' >
            <Box p={4} borderBottom="1px" borderColor="gray.100">
                <Jivee />
            </Box>

            <Box px={3} py={2}>
                <Framer.Tabs {...framer.tabProps} />
            </Box>

            <Box flex="1" overflowY="auto" px={3} pb={10} w={'full'} css={{ "&::-webkit-scrollbar": { width: "4px", }, "&::-webkit-scrollbar-track": { background: "transparent", }, "&::-webkit-scrollbar-thumb": { background: "#E2E8F0", borderRadius: "4px", }, }} >
                {hookProps.tabs[framer.tabProps.selectedTabIndex]?.children}
            </Box>

            <Box position="absolute" bottom={{ base: 6, lg: 8 }} right={{ base: 4, lg: 6 }} zIndex={10}>
                <Box as="button" p={3} bg="purple.400" color="white" borderRadius="xl" shadow="lg" _hover={{ bg: "purple.700", transform: "scale(1.05)" }} _active={{ transform: "scale(0.95)" }} transition="all 0.2s" >
                    <BiSolidMessageSquareAdd size={20} />
                </Box>
            </Box>
        </Box>

        {/* Main Chat Area */}
        <Box display={{ base: !isMobile || state.selectedChat ? "flex" : "none", lg: "flex" }} width={state.sideBar.open ? 'calc(100% - (23.375rem + 30%))' : 'calc(100% - (3.375rem + 30%))'} flex="1" bg="white" borderRadius={{ base: 0, lg: "xl" }} shadow={{ base: "none", lg: "lg" }} overflow="hidden" position="relative" >
            <Conversations />
        </Box>

        {/* Contact Info Sidebar */}
        {state.sideBar.open && (() => {
            switch (state.sideBar.type) {
                case 'CONTACT':
                    return (
                        <Box w={{ base: "100%", lg: "320px" }} h="100%" bg="white" borderRadius={{ base: 0, lg: "xl" }} shadow={{ base: "none", lg: "lg" }} position={{ base: "absolute", lg: "relative" }} top={{ base: 0, lg: "auto" }} right={{ base: 0, lg: "auto" }} zIndex={{ base: 20, lg: "auto" }} >
                            <Contact />
                        </Box>
                    )
                case 'STARRED':
                    return (
                        <Box w={{ base: "100%", lg: "320px" }} h="100%" bg="white" borderRadius={{ base: 0, lg: "xl" }} shadow={{ base: "none", lg: "lg" }} position={{ base: "absolute", lg: "relative" }} top={{ base: 0, lg: "auto" }} right={{ base: 0, lg: "auto" }} zIndex={{ base: 20, lg: "auto" }} >
                            <StarredMessages />
                        </Box>
                    )
                case 'SHARED':
                    return (
                        <Box w={{ base: "100%", lg: "320px" }} h="100%" bg="white" borderRadius={{ base: 0, lg: "xl" }} shadow={{ base: "none", lg: "lg" }} position={{ base: "absolute", lg: "relative" }} top={{ base: 0, lg: "auto" }} right={{ base: 0, lg: "auto" }} zIndex={{ base: 20, lg: "auto" }} >
                            <SharedMessages />
                        </Box>
                    )
                default:
                    break;
            }
        }) ()}
    </Flex>
  )
}

export default index
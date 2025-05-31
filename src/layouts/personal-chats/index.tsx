import { Avatar, AvatarBadge, Box, Flex, HStack, VStack, Text } from "@chakra-ui/react"
import { useState } from "react";
import { DefaultInput } from "../../components";
// import { BiSolidMessageSquareAdd } from "react-icons/bi";


const index = () => {
  const [ searchValue, setSearchValue ] = useState("");
  
  const handleBlur = () => {
      // Do something when the input field loses focus
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Do something when the input value changes
      setSearchValue(e.target.value);
  };

  // Mock chat data
  const chats = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Contact ${i + 1}`,
    lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dignissimos.",
    time: "2:30 PM",
    unread: i % 3 === 0 ? Math.floor(Math.random() * 5) + 1 : 0,
    online: i % 4 === 0,
  }))

  return (
    // <div className="w-full flex flex-col items-center justify-start gap-1 flex-grow h-full" >
    //   <div className="w-full flex items-center justify-center">
    //     <DefaultInput height='34px' name='search' value={searchValue} type='search' color="purple.500" shadow='md' onBlur={handleBlur} borderColor="purple.300" placeholder="Search..." bgColor='purple.100' width='80%' onChange={handleChange} focusBorderColor='purple.300' className='flex items-center mx-auto focus-within:bg-white fixed text-sm' />
    //   </div>
    //   <Box className="w-full h-full flex flex-col items-center justify-start gap-1">
    //     <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
    //       <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
    //         <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
    //       </Avatar>
    //       <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
    //         <h4 className="text-sm font-medium">Oba1</h4>
    //         <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
    //       </div>
    //     </div>
    //     <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
    //       <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
    //         <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
    //       </Avatar>
    //       <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
    //         <h4 className="text-sm font-medium">Oba2</h4>
    //         <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
    //       </div>
    //     </div>
    //     <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
    //       <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
    //         <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
    //       </Avatar>
    //       <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
    //         <h4 className="text-sm font-medium">Oba3</h4>
    //         <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
    //       </div>
    //     </div>
    //     <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
    //       <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
    //         <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
    //       </Avatar>
    //       <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
    //         <h4 className="text-sm font-medium">Oba4</h4>
    //         <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
    //       </div>
    //     </div>
    //     <div className="flex flex-row p-1 items-center justify-start w-full  rounded-xl bg-white border border-neutral-200 gap-2">
    //       <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
    //         <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
    //       </Avatar>
    //       <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
    //         <h4 className="text-sm font-medium">Oba5</h4>
    //         <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
    //       </div>
    //     </div>
    //     <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
    //       <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
    //         <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
    //       </Avatar>
    //       <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
    //         <h4 className="text-sm font-medium">Oba6</h4>
    //         <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
    //       </div>
    //     </div>
    //     <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
    //       <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
    //         <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
    //       </Avatar>
    //       <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
    //         <h4 className="text-sm font-medium">Oba7</h4>
    //         <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
    //       </div>
    //     </div>
    //     <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
    //       <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
    //         <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
    //       </Avatar>
    //       <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
    //         <h4 className="text-sm font-medium">Oba8</h4>
    //         <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
    //       </div>
    //     </div>
    //     <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
    //       <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
    //         <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
    //       </Avatar>
    //       <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
    //         <h4 className="text-sm font-medium">Oba9</h4>
    //         <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
    //       </div>
    //     </div>
    //     <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
    //       <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
    //         <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
    //       </Avatar>
    //       <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
    //         <h4 className="text-sm font-medium">Oba0</h4>
    //         <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
    //       </div>
    //     </div>
    //     <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
    //       <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
    //         <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
    //       </Avatar>
    //       <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
    //         <h4 className="text-sm font-medium">Oba01</h4>
    //         <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
    //       </div>
    //     </div>
    //     <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
    //       <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
    //         <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
    //       </Avatar>
    //       <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
    //         <h4 className="text-sm font-medium">Oba02</h4>
    //         <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
    //       </div>
    //     </div>
    //   </Box>
      
    //   {/* <button className='flex fixed bottom-[6%] md:bottom-[8%] xl:bottom-[5%] items-center z-20 cursor-pointer px-2 py-2 group rounded-xl md:shadow-lg outline-none border-none bg-purple-600 dark:bg-purple-600 dark:hover:bg-white gap-1 hover:bg-white hover:shadow-neutral-400 text-white dark:hover:text-purple-600 dark:text-white hover:text-purple-600'>
    //       <BiSolidMessageSquareAdd size={20} /> 
    //   </button> */}
    // </div>
    <VStack spacing={3} w="100%" h="100%" align="stretch">
      {/* Search Bar */}
      <Box mt={1} px={1}>
        <DefaultInput height="40px" name="search" value={searchValue} type="search" placeholder="Search conversations..." bgColor="gray.50" borderColor="gray.200" focusBorderColor="purple.400" onBlur={handleBlur} onChange={handleChange} className="text-sm" />
      </Box>

      {/* Chat List */}
      <VStack spacing={1} align="stretch" flex="1" overflowY="auto" className="trick">
        {chats.map((chat) => (
          <Box key={chat.id} p={3} bg="white" borderRadius="lg" border="1px" borderColor="gray.100" cursor="pointer" _hover={{ bg: "gray.50", borderColor: "purple.200" }} transition="all 0.2s" >
            <HStack spacing={3} align="start">
              <Box position="relative">
                <Avatar size="md" name={chat.name}>
                  {chat.online && <AvatarBadge boxSize="1rem" bg="green.500" borderColor="white" borderWidth="2px" />}
                </Avatar>
              </Box>

              <VStack spacing={1} align="start" flex="1" minW={0}>
                <Flex justify="space-between" w="100%" align="center">
                  <Text fontSize="sm" fontWeight="medium" color="gray.800" noOfLines={1}>
                    {chat.name}
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    {chat.time}
                  </Text>
                </Flex>

                <Flex justify="space-between" w="100%" align="center">
                  <Text fontSize="sm" color="gray.500" noOfLines={1} flex="1" mr={2}>
                    {chat.lastMessage}
                  </Text>
                  {chat.unread > 0 && (
                    <Box bg="purple.500" color="white" borderRadius="full" minW="20px" h="20px" display="flex" alignItems="center" justifyContent="center" fontSize="xs" fontWeight="bold" >
                      {chat.unread}
                    </Box>
                  )}
                </Flex>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </VStack>
  )
}

export default index
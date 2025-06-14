// import { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion } from 'framer-motion';
// import { Avatar, Menu, MenuButton, MenuList, MenuItem, VStack } from "@chakra-ui/react"
// import { Settings, User, LogOut } from "lucide-react"
// import { Tab } from "../../hooks/navUse-tabs";
// // import { BiMenu, BiMenuAltLeft } from "react-icons/bi";


// const transition = {
//     type: 'tween',
//     ease: 'easeInOut',
//     duration: 0.20,
// }

// type Props = {
//     selectedTabIndex: number;
//     tabs: Tab[];
//     setSelectedTab: (input: [number, number]) => void;
//     onProfileClick?: () => void
//     onLogout?: () => void
//     userProfileName: string | null;
//     userProfileImage: string | null;
// };

// const Tabs = ({ tabs, selectedTabIndex, setSelectedTab, onProfileClick, onLogout, userProfileName, userProfileImage }: Props): JSX.Element => {
//     // const [ toggle, setToggle ] = useState(false);

//     const [buttonRefs, setButtonRefs] = useState<Array<HTMLButtonElement | null>>([]);

//     useEffect(() => {
//         setButtonRefs((prev) => prev.slice(0, tabs.length));
//     }, [tabs.length]);

//     const navRef = useRef<HTMLDivElement>(null);
//     const navRect = navRef.current?.getBoundingClientRect();

//     const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect();

//     const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null)
//     const hoveredRect = buttonRefs[hoveredTabIndex ?? -1]?.getBoundingClientRect();
    
//     const mainTabs = tabs.filter((tab) => !["settings", "profile", "logout"].includes(tab.id))

//     const handleProfileClick = () => {
//       if (onProfileClick) {
//         onProfileClick()
//       }
//     }

//     const handleLogout = () => {
//       if (onLogout) {
//         onLogout()
//       }
//     }

//     const handleSettingsClick = () => {
//       const settingsIndex = tabs.findIndex((tab) => tab.id === "settings")
//       if (settingsIndex !== -1) {
//         setSelectedTab([settingsIndex, settingsIndex > selectedTabIndex ? settingsIndex : -1])
//       }
//     }

//     return (
//         <div className="hidden md:flex h-full justify-center">
//             <div className={`rounded-xl text-purple-700/80 w-16 items-center justify-between flex-shrink-0 flex flex-col shadow-xl h-full transition-colors duration-500 ease-in-out`}>
               
                
//                 <motion.div ref={navRef} transition={{ type: 'spring', ease: 'easeInOut', duration: 0.40 }} className={`rounded-xl relative shadow-2xl flex flex-col bg-white items-center justify-between py-4 px-1 gap-6 h-full w-full`} onPointerLeave={() => setHoveredTabIndex(null)}>
//                     <VStack spacing={4} align="center">
//                         {mainTabs.map((item, i) => {
//                             const isActive = hoveredTabIndex === i || selectedTabIndex === i;

//                             return (
//                                 <motion.button key={i} className={`flex flex-col items-center gap-1 w-[54px] text-xs py-2 px-2 rounded-lg cursor-pointer outline-none font-medium z-20 transition-colors duration-200 ${isActive ? 'text-white bg-purple-700/80' : 'text-purple-700/80'}`} ref={(el) => (buttonRefs[i] =el)} onPointerEnter={() => {setHoveredTabIndex(i)}} onFocus={() => {setHoveredTabIndex(i)}} onClick={() => {setSelectedTab([i, i > selectedTabIndex ? i : -1])}} >
//                                     {item.icon}
//                                     <span>{item.label}</span>
//                                 </motion.button>
//                             )
//                         })}
//                     </VStack>

//                     <VStack spacing={3} align="center">
//                         <motion.button className="flex flex-col items-center gap-1 w-[54px] text-xs py-2 px-2 rounded-lg cursor-pointer outline-none font-medium text-purple-700/80 hover:bg-purple-50 transition-colors duration-200" onClick={handleSettingsClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} >
//                             <Settings size={18} />
//                             <span className="text-[10px]">Settings</span>
//                         </motion.button>

//                         <Menu>
//                             <MenuButton as={motion.div} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer" >
//                                 <Avatar size="sm" name={userProfileName || 'User'} src={userProfileImage || undefined} bg="purple.300" color="white" _hover={{ transform: "scale(1.05)", transition: "transform 0.2s", }} />
//                             </MenuButton>
//                             <MenuList bg="white" border="1px" borderColor="gray.100" shadow="lg" borderRadius="lg" py={2} minW="160px" >
//                                 <MenuItem icon={<User size={16} />} onClick={handleProfileClick} _hover={{ bg: "purple.400" }} _focus={{ bg: "purple.50" }} color="gray.700" fontSize="sm" >
//                                     Profile
//                                 </MenuItem>
//                                 <MenuItem icon={<LogOut size={16} />} onClick={handleLogout} _hover={{ bg: "red.50" }} _focus={{ bg: "red.50" }} color="red.600" fontSize="sm" >
//                                     Logout
//                                 </MenuItem>
//                             </MenuList>
//                         </Menu>
//                     </VStack>

//                     <AnimatePresence>
//                         {hoveredRect && navRect && hoveredTabIndex !== null && hoveredTabIndex < mainTabs.length && (
//                             <motion.div key={'hover'} className="absolute top-0 rounded-lg p-1 bg-transparent" initial={{ x: hoveredRect.left - navRect.left, y: hoveredRect.top - navRect.top, width: hoveredRect.width, height: hoveredRect.height, opacity: 0, }} animate={{ x: hoveredRect.left - navRect.left, y: hoveredRect.top - navRect.top, width: hoveredRect.width, height: hoveredRect.height, opacity: 1, }} exit={{ opacity: 0, }} transition={transition} />
//                         )}
//                     </AnimatePresence>

//                     {selectedRect && navRect && selectedTabIndex < mainTabs.length && (
//                         <motion.div className={`absolute top-0 rounded-lg bg-purple-700/80 hover:text-white`} initial={false} animate={{ width: selectedRect.width, x: selectedRect.left - navRect.left, y: selectedRect.top - navRect.top, opacity: 1, }} transition={transition} />
//                     )}
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export const Framer = { Tabs };





















import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Avatar, Menu, MenuButton, MenuList, MenuItem, VStack } from "@chakra-ui/react"
import { Settings, User, LogOut } from "lucide-react"
import type { Tab } from "../../hooks/navUse-tabs"
import { useAppContext } from "../management/appState"
import useApi from "../management/useApi"

const transition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.2,
}

type Props = {
  selectedTabIndex: number
  tabs: Tab[]
  setSelectedTab: (input: [number, number]) => void
  onProfileClick?: () => void
  onLogout?: () => void
}

const Tabs = ({ tabs, selectedTabIndex, setSelectedTab, onProfileClick, onLogout }: Props): JSX.Element => {
  const [buttonRefs, setButtonRefs] = useState<Array<HTMLButtonElement | null>>([])

  // Get user data from context
  const { state } = useAppContext()
  const api = useApi()

  useEffect(() => {
    setButtonRefs((prev) => prev.slice(0, tabs.length))
  }, [tabs.length])

  // Fetch user profile when component mounts or user changes
  useEffect(() => {
    if (state.user?.uid) {
      // Fetch user profile data
      const fetchProfile = async () => {
        await api.fetchUserProfile(state.user!.uid);
      }

      fetchProfile();
    }
  }, [state.user, api])

  
  const navRef = useRef<HTMLDivElement>(null)
  const navRect = navRef.current?.getBoundingClientRect()

  const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect()

  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null)
  const hoveredRect = buttonRefs[hoveredTabIndex ?? -1]?.getBoundingClientRect()

  const mainTabs = tabs.filter((tab) => !["settings", "profile", "logout"].includes(tab.id))

  const handleProfileClick = () => {
    if (onProfileClick) {
      onProfileClick()
    }
  }

  const handleLogout = () => {
    if (onLogout) {
      onLogout()
    }
  }

  const handleSettingsClick = () => {
    // Find settings tab and activate it
    const settingsIndex = tabs.findIndex((tab) => tab.id === "settings")
    if (settingsIndex !== -1) {
      setSelectedTab([settingsIndex, settingsIndex > selectedTabIndex ? settingsIndex : -1])
    }
  }

  return (
    <div className="hidden md:flex h-full justify-center">
      <div className={`rounded-xl text-purple-700/80 w-16 items-center justify-between flex-shrink-0 flex flex-col shadow-xl h-full transition-colors duration-500 ease-in-out`}>
        <motion.div ref={navRef} transition={{ type: "spring", ease: "easeInOut", duration: 0.4 }} className={`rounded-xl relative shadow-2xl flex flex-col bg-white items-center justify-between py-4 px-1 gap-6 h-full w-full`} onPointerLeave={() => setHoveredTabIndex(null)} >
          <VStack spacing={4} align="center">
            {mainTabs.map((item, i) => {
              const isActive = hoveredTabIndex === i || selectedTabIndex === i

              return (
                <motion.button key={i} className={`flex flex-col items-center gap-1 w-[54px] text-xs py-2 px-2 rounded-lg cursor-pointer outline-none font-medium z-20 transition-colors duration-200 ${isActive ? "text-white bg-purple-700/80" : "text-purple-700/80"}`} ref={(el) => (buttonRefs[i] = el)} onPointerEnter={() => { setHoveredTabIndex(i) }} onFocus={() => { setHoveredTabIndex(i) }} onClick={() => { setSelectedTab([i, i > selectedTabIndex ? i : -1]) }} >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.button>
              )
            })}
          </VStack>

          <VStack spacing={3} align="center">
            <motion.button className="flex flex-col items-center gap-1 w-[54px] text-xs py-2 px-2 rounded-lg cursor-pointer outline-none font-medium text-purple-700/80 hover:bg-purple-50 transition-colors duration-200" onClick={handleSettingsClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} >
              <Settings size={18} />
              <span className="text-[10px]">Settings</span>
            </motion.button>

            <Menu>
              <MenuButton as={motion.div} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer" >
                <Avatar size="sm" name={state.userProfileName || 'User'} src={state.userProfileImage || ''} bg="purple.300" color="white" _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }} />
              </MenuButton>
              <MenuList bg="white" border="1px" borderColor="gray.100" shadow="lg" borderRadius="lg" py={2} minW="160px" >
                <MenuItem icon={<User size={16} />} onClick={handleProfileClick} _hover={{ bg: "purple.400" }} _focus={{ bg: "purple.50" }} color="gray.700" fontSize="sm" >
                  Profile
                </MenuItem>
                <MenuItem icon={<LogOut size={16} />} onClick={handleLogout} _hover={{ bg: "red.50" }} _focus={{ bg: "red.50" }} color="red.600" fontSize="sm" >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </VStack>

          <AnimatePresence>
            {hoveredRect && navRect && hoveredTabIndex !== null && hoveredTabIndex < mainTabs.length && (
              <motion.div key={"hover"} className="absolute top-0 rounded-lg p-1 bg-transparent" initial={{ x: hoveredRect.left - navRect.left, y: hoveredRect.top - navRect.top, width: hoveredRect.width, height: hoveredRect.height, opacity: 0, }} animate={{ x: hoveredRect.left - navRect.left, y: hoveredRect.top - navRect.top, width: hoveredRect.width, height: hoveredRect.height,
                 opacity: 1, }} exit={{ opacity: 0 }} transition={transition} />
            )}
          </AnimatePresence>

          {selectedRect && navRect && selectedTabIndex < mainTabs.length && (
            <motion.div className={`absolute top-0 rounded-lg bg-purple-700/80 hover:text-white`} initial={false} animate={{ width: selectedRect.width, x: selectedRect.left - navRect.left, y: selectedRect.top - navRect.top, opacity: 1, }} transition={transition} />
          )}
        </motion.div>
      </div>
    </div>
  )
}

export const Framer = { Tabs }
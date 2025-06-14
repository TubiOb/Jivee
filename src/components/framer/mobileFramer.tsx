import { useEffect, useRef, useState } from "react";

import { BiMenu } from "react-icons/bi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Avatar, Menu, MenuButton, MenuList, MenuItem, VStack, Divider } from "@chakra-ui/react"
import { Settings, User, LogOut } from "lucide-react"
import { AnimatePresence, motion } from 'framer-motion';
import { Tab } from "../../hooks/navUse-tabs";

const transition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.20,
}

type Props = {
    selectedTabIndex: number;
    tabs: Tab[];
    setSelectedTab: (input: [number, number]) => void;
    onProfileClick?: () => void
    onLogout?: () => void
};

const Tabs = ({ tabs, selectedTabIndex, setSelectedTab, onProfileClick, onLogout }: Props): JSX.Element => {
    const [ toggle, setToggle ] = useState(false);

    const [buttonRefs, setButtonRefs] = useState<Array<HTMLButtonElement | null>>([],);
    // @ts-ignore
    const [userAvatar, setUserAvatar] = useState("")
    // @ts-ignore
    const [userName, setUserName] = useState("User")

    useEffect(() => {
        setButtonRefs((prev) => prev.slice(0, tabs.length));
    }, [tabs.length]);

    const navRef = useRef<HTMLDivElement>(null);
    const navRect = navRef.current?.getBoundingClientRect();

    const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect();

    const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null)
    const hoveredRect = buttonRefs[hoveredTabIndex ?? -1]?.getBoundingClientRect();

    const mainTabs = tabs.filter((tab) => !["settings", "profile", "logout"].includes(tab.id))

    const handleProfileClick = () => {
      if (onProfileClick) {
        onProfileClick()
      }
      setToggle(false)
    }

    const handleLogout = () => {
      if (onLogout) {
        onLogout()
      }
      setToggle(false)
    }

    const handleSettingsClick = () => {
      const settingsIndex = tabs.findIndex((tab) => tab.id === "settings")
      if (settingsIndex !== -1) {
        setSelectedTab([settingsIndex, settingsIndex > selectedTabIndex ? settingsIndex : -1])
      }
      setToggle(false)
    }

    return (
        <div className="md:hidden flex justify-center">
            <div className={`text-2xl text-purple-700/80 cursor-pointer absolute top-2 left-2 flex items-center justify-center outline-none bg-white rounded-xl p-1 shadow-xl`} onClick={() => setToggle(!toggle)}>
                <BiMenu />
            </div>
            {/* <div className={` text-purple-700/80 bottom-0 top-0 h-full left-0 fixed items-center flex-shrink-0 flex transition-all duration-500 ease-in-out`}> */}
                
                
                <motion.div transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }} ref={navRef} className={`shadow-2xl flex flex-col bottom-0 top-0 h-full bg-white items-center fixed justify-between overflow-hidden py-4 px-3 gap-2 z-20 w-[60%] left-0 transition-transform duration-300 ${toggle ? 'translate-x-0 ' : '-translate-x-full'}`} onPointerLeave={() => setHoveredTabIndex(null)}>
                    <div className={`text-2xl text-purple-700/80 cursor-pointer absolute bottom-3 right-2 flex items-center justify-center outline-none bg-white rounded-xl p-1 shadow-xl`} onClick={() => setToggle(!toggle)}>
                        <MdKeyboardArrowLeft />
                    </div>
                    {/* Add your sidebar content here */}
                    {/* You can use conditional rendering to show/hide sidebar items */}
                    <VStack spacing={2} align="stretch" flex="1" w="100%">
                        {mainTabs.map((item, i) => {
                            const isActive = hoveredTabIndex === i || selectedTabIndex === i;

                            return (
                                <motion.button key={i} className={`flex flex-row h-[50px] items-center gap-3 text-xs outline-none lg:text-sm py-2 px-2 w-full rounded-lg cursor-pointer font-medium z-20 transition-colors duration-200 ${isActive ? 'text-white bg-purple-700/80' : 'text-purple-700/80'}`} ref={(el) => (buttonRefs[i] =el)} onPointerEnter={() => {setHoveredTabIndex(i)}} onFocus={() => {setHoveredTabIndex(i)}} onClick={() => {setSelectedTab([i, i > selectedTabIndex ? i : -1]); setToggle(false)}} >
                                    {item.icon}
                                    <span>{item.label}</span>
                                </motion.button>
                            )
                        })}
                    </VStack>

                    <Divider />

                    {/* Bottom Section */}
                    <VStack spacing={3} align="stretch" w="100%">
                      {/* Settings */}
                      <motion.button className="flex flex-row h-[50px] items-center gap-3 text-sm outline-none py-3 px-4 w-full rounded-lg cursor-pointer font-medium text-purple-700/80 hover:bg-purple-50 transition-colors duration-200" onClick={handleSettingsClick} >
                        <Settings size={18} />
                        <span>Settings</span>
                      </motion.button>

                      {/* Profile Menu */}
                      <Menu>
                        <MenuButton as={motion.div} className="flex flex-row h-[50px] items-center gap-3 text-sm outline-none py-3 px-4 w-full rounded-lg cursor-pointer font-medium text-purple-700/80 hover:bg-purple-50 transition-colors duration-200" >
                          <Avatar size="sm" name={userName} src={userAvatar} bg="purple.500" color="white" />
                          <span>Profile</span>
                        </MenuButton>
                        <MenuList bg="white" border="1px" borderColor="gray.200" shadow="lg" borderRadius="lg" py={2} minW="160px">
                          <MenuItem icon={<User size={16} />} onClick={handleProfileClick} _hover={{ bg: "purple.50" }} _focus={{ bg: "purple.50" }} color="gray.700" fontSize="sm" >
                            View Profile
                          </MenuItem>
                          <MenuItem icon={<LogOut size={16} />} onClick={handleLogout} _hover={{ bg: "red.50" }} _focus={{ bg: "red.50" }} color="red.600" fontSize="sm" >
                            Logout
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </VStack>

                    <AnimatePresence>
                        {hoveredRect && navRect && hoveredTabIndex !== null && hoveredTabIndex < mainTabs.length && (
                            <motion.div key={'hover'} className="absolute h-[0%] rounded-lg p-1 bg-transparent" initial={{ x: hoveredRect.left - navRect.left, y: hoveredRect.top - navRect.top, width: hoveredRect.width, height: hoveredRect.height, opacity: 0, }} animate={{ x: hoveredRect.left - navRect.left, y: hoveredRect.top - navRect.top, width: hoveredRect.width, height: hoveredRect.height, opacity: 1, }} exit={{ opacity: 0, }} transition={transition} />
                        )}
                    </AnimatePresence>

                    {selectedRect && navRect && selectedTabIndex < mainTabs.length && (
                        <motion.div className={`absolute rounded-lg z-10 h-[0%] bg-purple-700/80 hover:text-white`} initial={false} animate={{ width: selectedRect.width * 1, x: `calc(${selectedRect.left }px + 0%)`, y: `calc(${selectedRect.top - navRect.top}px + 10%)`, opacity: 1, }} transition={transition} />
                    )}

               
                </motion.div>
            {/* </div> */}
        </div>
    );
};

export const mobFramer = { Tabs };
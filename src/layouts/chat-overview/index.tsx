import { useState } from "react";
import { Jivee, useApi } from "../../components"
// import { motion } from "framer-motion";
import { useTabs } from "../../hooks/use-tabs";
import { Framer } from "../../components/framer/framer";
import { Contact, Conversations, GroupInbox, PersonalInbox } from "..";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { Box } from "@chakra-ui/react";


const index = () => {
    const { state } = useApi();

    const [hookProps] = useState({ 
        tabs: [
            { id: 'personal', label: 'Personal', children: <PersonalInbox /> },
            { id: 'group', label: 'Group', children: <GroupInbox /> },
        ],
        initialTabId: 'Matches',
    });

    const framer = useTabs(hookProps);
    

  return (
    <div className="flex flex-row w-full h-full rounded-xl gap-2 items-center justify-start">
        <div className="hidden lg:flex flex-col rounded-xl w-full h-full lg:w-[40%] xl:w-[30%] md:shadow-xl py-2 px-3 gap-3 items-center justify-start">
            <Jivee />
            <div className="w-full relative rounded-xl overflow-hidden flex flex-col gap-2 py-2 flex-grow h-full">
                <Framer.Tabs {...framer.tabProps} />
                <Box className="trick rounded-none md:rounded-xl py-2 flex-grow overflow-y-scroll h-full">
                    {framer.setSelectedTab.children}
                    
                </Box>
                <button className='flex fixed self-end mr-3 mb-5 bottom-[6%] md:bottom-[8%] xl:bottom-[5%] items-center z-20 cursor-pointer px-2 py-2 group rounded-xl md:shadow-lg outline-none border-none bg-purple-600 dark:bg-purple-600 dark:hover:bg-white gap-1 hover:bg-white text-white dark:hover:text-purple-600 dark:text-white hover:text-purple-600'>
                    <BiSolidMessageSquareAdd size={20} /> 
                </button>
            </div>
        </div>
        <Box className="flex-1 h-full rounded-r-xl" width={state.sideBar.open ? 'calc(100% - (23.375rem + 30%))' : 'calc(100% - (3.375rem + 30%))'}>
            <Conversations />
        </Box>

        {state.sideBar.open && <Contact />}
    </div>
  )
}

export default index







// md:right-[58%] xl:right-[60%]
{/* <div className="items-center w-full h-12 grid grid-cols-2 overflow-hidden shadow-lg rounded-lg px-1 transition">
                {tabs.map((tab) => (
                    <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`relative block h-10 px-2 font-medium transition rounded-lg ${activeTab === tab.id ? 'text-white' : 'hover:opacity-75 text-purple-500'}`}>
                        {activeTab === tab.id && (
                            <motion.div layoutId='active-chatCategory' transition={{ type: 'tween', }} className="absolute inset-0 rounded-xl bg-purple-500 " />    
                        )}
                        <span className="relative z-10">{tab.label}</span>
                    </button>
                ))}
                
            </div> */}









            {/* <div className="flex bg-red-700 w-full">
                <motion.div layoutId='chat-category' className='h-full w-full bg-green-600'>
                </motion.div>
            </div> */}

            {/* <div className='relative rounded-lg mt-2 bg-red-500'>
                <div role='tabpanel' id='panel-1' className="tab-panel p-2 transition duration-300">
                    <h2>First One</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quam!</p>
                </div>
                <div role='tabpanel' id='panel-2' className="absolute top-0 opacity-0 tab-panel p-2 transition duration-300">
                    <h2>Second One</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quam!</p>
                </div>
            </div> */}
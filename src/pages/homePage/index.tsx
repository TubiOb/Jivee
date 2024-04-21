import { Inbox } from "../../layouts"
import '../../index.css'

import { RiUserSettingsLine } from "react-icons/ri";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

import { Framer } from "../../components/framer/navFramer"
import { mobFramer } from "../../components/framer/mobileFramer";
import { navTabs } from "../../hooks/navUse-tabs"
import { useState } from "react"
import { Settings } from "..";


const index = () => {
  const [hookProps] = useState({
    tabs: [
      { id: 'chats', icon: <HiOutlineChatBubbleBottomCenterText size={18} />, label: 'Chats', children: <Inbox /> },
      { id: 'settings', icon: <RiUserSettingsLine size={18} />, label: 'Settings', children: <Settings /> },
      { id: 'chatss', icon: <HiOutlineChatBubbleBottomCenterText size={18} />, label: 'Chatss', children: <Inbox /> },
      { id: 'settingss', icon: <RiUserSettingsLine size={18} />, label: 'Settingss', children: <Settings /> },
      { id: 'chatsss', icon: <HiOutlineChatBubbleBottomCenterText size={18} />, label: 'Chatsss', children: <Inbox /> },
    ],
    initialTabId: 'Matches',
  });

  const framer = navTabs(hookProps);

  return (
    <div className="w-full flex flex-col lg:flex-row items-start h-screen bg-transparent md:bg-purple-700/80 md:py-3 md:px-2 gap-0 md:gap-2">
        <Framer.Tabs {...framer.tabProps} />
        <div className="flex flex-1 h-[90%] md:h-full w-full md:rounded-xl shadow-none md:shadow-xl sticky flex-col lg:flex-row items-center bg-white p-1 gap-4">
            {framer.setSelectedTab.children}
        </div>
        <mobFramer.Tabs {...framer.tabProps} />
    </div>
  )
}

export default index
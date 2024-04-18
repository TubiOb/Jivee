import { Navi } from "../../components"
import { Inbox } from "../../layouts"
import '../../index.css'

import { RiUserSettingsLine } from "react-icons/ri";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

import { Framer } from "../../components/framer/navFramer"
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
    <div className="w-full flex lg:flex-row items-start h-screen bg-purple-700/80 overflow-auto py-3 px-2 gap-2">
        <Framer.Tabs {...framer.tabProps} />
        <div className="flex flex-1 h-full rounded-xl shadow-xl flex-col lg:flex-row items-center bg-white p-1 gap-4">
            {framer.setSelectedTab.children}
        </div>
    </div>
  )
}

export default index
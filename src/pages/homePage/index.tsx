import { Inbox } from "../../layouts"
import '../../index.css'

import { RiUserSettingsLine, RiUser3Line } from "react-icons/ri";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { HiLogout } from "react-icons/hi";
import { MdOutlinePeopleAlt } from "react-icons/md";

import { Framer } from "../../components/framer/navFramer"
import { mobFramer } from "../../components/framer/mobileFramer";
import { navTabs } from "../../hooks/navUse-tabs"
import { useState } from "react"
import { Profile, Settings } from "..";


const index = () => {
  const [hookProps] = useState({
    tabs: [
      { id: 'chats', icon: <IoChatboxEllipsesOutline size={18} />, label: 'Chats', children: <Inbox /> },
      { id: 'contacts', icon: <MdOutlinePeopleAlt size={18} />, label: 'Contacts', children: <Settings /> },
      { id: 'settings', icon: <RiUserSettingsLine size={18} />, label: 'Settings', children: <Settings /> },
      { id: 'profile', icon: <RiUser3Line size={18} />, label: 'Profile', children: <Profile /> },
      { id: 'logout', icon: <HiLogout size={18} />, label: 'Logout', children: <Inbox /> },
    ],
    initialTabId: 'chats',
  });

  const framer = navTabs(hookProps);

  return (
    <div className="w-full flex flex-col md:flex-row h-screen items-start bg-white md:bg-purple-700/30 md:py-1 md:px-1 gap-0 md:gap-2">
      <Framer.Tabs {...framer.tabProps} />
      <mobFramer.Tabs {...framer.tabProps} />
      <div className="flex w-full h-screen md:h-full md:rounded-xl overflow-hidden shadow-none md:shadow-xl flex-col lg:flex-row items-center gap-4">
        {framer.setSelectedTab.children}
      </div>
    </div>
  )
}

export default index
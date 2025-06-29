import { Inbox } from "../../layouts"
import '../../index.css'

// import { RiUserSettingsLine, RiUser3Line } from "react-icons/ri";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
// import { HiLogout } from "react-icons/hi";
import { MdOutlinePeopleAlt } from "react-icons/md";

import { Framer } from "../../components/framer/navFramer"
import { mobFramer } from "../../components/framer/mobileFramer";
import { navTabs } from "../../hooks/navUse-tabs"
import { useState } from "react"
import { Calls, Profile, Settings } from "..";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { toast } from "sonner";
import { auth } from "../../firebase";


const index = () => {
  const navigate = useNavigate();
  
  const [hookProps] = useState({
    tabs: [
      { id: 'chats', icon: <IoChatboxEllipsesOutline size={18} />, label: 'Chats', children: <Inbox /> },
      { id: 'contacts', icon: <MdOutlinePeopleAlt size={18} />, label: 'Contacts', children: <Settings /> },
      { id: "calls", icon: <Phone size={18} />, label: "Calls", children: <Calls /> },
      { id: "settings", icon: null, label: "Settings", children: <Settings /> },
      { id: "profile", icon: null, label: "Profile", children: <Profile /> },
    ],
    initialTabId: 'chats',
  });

  const framer = navTabs(hookProps);

  const handleProfileClick = () => {
    // Navigate to profile tab
    const profileIndex = hookProps.tabs.findIndex((tab) => tab.id === "profile")
    if (profileIndex !== -1) {
      framer.tabProps.setSelectedTab([profileIndex, profileIndex])
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      localStorage.removeItem("userPhoneNumber")
      toast.success("Logged out successfully")
      navigate("/auth/signin")
    } catch (error) {
      console.error("Error signing out:", error)
      toast.error("Error logging out")
    }
  }

  return (
    <div className="w-full flex flex-col md:flex-row h-screen items-start bg-white md:bg-purple-700/30 md:py-1 md:px-1 gap-0 md:gap-2">
      <Framer.Tabs {...framer.tabProps} onProfileClick={handleProfileClick} onLogout={handleLogout} />
      <mobFramer.Tabs {...framer.tabProps} />
      <div className="flex w-full h-screen md:h-full md:rounded-xl overflow-hidden shadow-none md:shadow-xl flex-col lg:flex-row items-center gap-4">
        {framer.setSelectedTab.children}
      </div>
    </div>
  )
}

export default index
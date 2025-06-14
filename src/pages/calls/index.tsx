import { useState } from "react";
import { Avatar, Badge, IconButton } from "@chakra-ui/react";
import {
  Phone,
  PhoneCall,
  PhoneIncoming,
  PhoneMissed,
  Video,
  Search,
} from "lucide-react";
import { DefaultInput } from "../../components";

interface CallRecord {
  id: string;
  name: string;
  avatar?: string;
  type: "incoming" | "outgoing" | "missed" | "video";
  time: string;
  duration?: string;
}

const index = () => {
  const [searchValue, setSearchValue] = useState("");

  // Mock call data
  const calls: CallRecord[] = [
    {
      id: "1",
      name: "John Doe",
      type: "incoming",
      time: "2:30 PM",
      duration: "5:23",
    },
    {
      id: "2",
      name: "Jane Smith",
      type: "outgoing",
      time: "1:15 PM",
      duration: "2:45",
    },
    { id: "3", name: "Mike Johnson", type: "missed", time: "12:45 PM" },
    {
      id: "4",
      name: "Sarah Wilson",
      type: "video",
      time: "11:30 AM",
      duration: "12:15",
    },
    {
      id: "5",
      name: "David Brown",
      type: "incoming",
      time: "10:20 AM",
      duration: "3:30",
    },
    {
      id: "6",
      name: "Lisa Davis",
      type: "outgoing",
      time: "Yesterday",
      duration: "1:20",
    },
    { id: "7", name: "Tom Anderson", type: "missed", time: "Yesterday" },
    {
      id: "8",
      name: "Emma Taylor",
      type: "video",
      time: "Yesterday",
      duration: "8:45",
    },
  ];

  const getCallIcon = (type: CallRecord["type"]) => {
    switch (type) {
      case "incoming":
        return <PhoneIncoming className="text-green-500" size={16} />;
      case "outgoing":
        return <PhoneCall className="text-blue-500" size={16} />;
      case "missed":
        return <PhoneMissed className="text-red-500" size={16} />;
      case "video":
        return <Video className="text-purple-500" size={16} />;
      default:
        return <Phone className="text-gray-500" size={16} />;
    }
  };

  const getCallTypeText = (type: CallRecord["type"]) => {
    switch (type) {
      case "incoming":
        return "Incoming";
      case "outgoing":
        return "Outgoing";
      case "missed":
        return "Missed";
      case "video":
        return "Video call";
      default:
        return "Call";
    }
  };

  const filteredCalls = calls.filter((call) =>
    call.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleBlur = () => {
      // Do something when the input field loses focus
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Do something when the input value changes
      setSearchValue(e.target.value);
  };

  return (
    <div className="flex flex-col w-full h-full p-4 space-y-3 bg-white">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Calls</h1>

        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <DefaultInput
            type="search"
            height="40px"
            name="search"
            value={searchValue}
            bgColor="gray.50"
            borderColor="gray.200"
            focusBorderColor="purple.400"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Search calls..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-sm"
          />
        </div>
      </div>

      {/* Call List */}
      <div className="flex-1 overflow-y-auto space-y-1">
        {filteredCalls.map((call) => (
          <div
            key={call.id}
            className="p-3 bg-white rounded-lg border border-gray-100 cursor-pointer hover:bg-gray-50 hover:border-purple-200 transition-all duration-200"
          >
            <div className="flex items-center space-x-3">
              <Avatar size="md" name={call.name} src={call.avatar} />

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center w-full">
                  <p className="text-sm font-medium text-gray-800 truncate">
                    {call.name}
                  </p>
                  <span className="text-xs text-gray-500">{call.time}</span>
                </div>

                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center space-x-2">
                    {getCallIcon(call.type)}
                    <span className="text-xs text-gray-500">
                      {getCallTypeText(call.type)}
                      {call.duration && ` • ${call.duration}`}
                    </span>
                  </div>

                  {call.type === "missed" && (
                    <Badge colorScheme="red" size="sm">
                      Missed
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <IconButton
                  aria-label="Voice call"
                  icon={<Phone size={16} />}
                  size="sm"
                  variant="ghost"
                  color="green.500"
                  _hover={{ bg: "green.50" }}
                />
                <IconButton
                  aria-label="Video call"
                  icon={<Video size={16} />}
                  size="sm"
                  variant="ghost"
                  color="purple.500"
                  _hover={{ bg: "purple.50" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;

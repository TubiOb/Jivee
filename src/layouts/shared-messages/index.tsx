import { useState } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { faker } from "@faker-js/faker";
import { CiImageOn } from "react-icons/ci";
// import { HiOutlineDownload } from "react-icons/hi";
import { useAppContext } from "../../components/management/appState";

const index = () => {
  const { dispatch } = useAppContext();
  const [activeTab, setActiveTab] = useState("media");

  const tabs = [
    { id: "media", label: "Media" },
    { id: "links", label: "Links" },
    { id: "docs", label: "Docs" },
  ];


  return (
    <Box w="20rem" h="100%">
      <Stack h="100%">
        <Box shadow="md" w="100%" bg="white">
          <Stack direction="row" p="2" h="64px" alignItems="center" justifyContent="space-center" spacing="5" >
            <button onClick={() => { dispatch({ type: "UPDATE_SIDEBAR_TYPE", payload: { type: "CONTACT" }, }); }} className="items-center justify-center text-xs cursor-pointer rounded-lg hover:bg-neutral-300/45 hover:text-white p-1">
              <ChevronLeft width={"18px"} size={"xs"} />
            </button>
            <Text className="text-base font-medium">Shared Messages</Text>
          </Stack>
        </Box>

        {/* <Tabs variant="outline" size='md' colorScheme="gray" px={2} pt={2}>
          <TabList _open={{ animationName: "fade-in, scale-in", animationDuration: "300ms", }} _closed={{ animationName: "fade-out, scale-out", animationDuration: "120ms", }}>
            <Tab>Media</Tab>
            <Tab>Links</Tab>
            <Tab>Docs</Tab>
          </TabList>
          <TabPanels _open={{ animationName: "fade-in, scale-in", animationDuration: "300ms", }} _closed={{ animationName: "fade-out, scale-out", animationDuration: "120ms", }}>
            <TabPanel>Content 1</TabPanel>
            <TabPanel>Content 2</TabPanel>
            <TabPanel>Content 3</TabPanel>
          </TabPanels>
        </Tabs> */}

        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-colors duration-200 focus:outline-none ${
                activeTab === tab.id
                  ? "text-neutral-600 border-b-2 border-neutral-500"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {activeTab === "media" && (
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-gray-50 border border-slate-200 shadow-sm shadow-slate-200 rounded-md h-24 items-center justify-center">
                  <img className="object-cover rounded-md w-full h-full" src={faker.image.food()} alt={faker.person.fullName()} />
                </div>
              ))}
            </div>
          )}

          {/* {activeTab === "links" && (
            <div className="space-y-2">
              {["https://example.com/link1", "https://example.com/link2"].map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 text-sm text-blue-600 bg-white/95 shadow-sm border border-neutral-200 shadow-neutral-200 cursor-pointer hover:bg-white/80 rounded-md truncate"
                >
                  {link}
                </a>
              ))}
            </div>
          )} */}
          {activeTab === "links" && (
            <div className="space-y-2">
              {[
                {
                  incoming: false,
                  preview: "https://via.placeholder.com/300x150",
                  message: "Check out this tutorial on building a chat app!",
                  url: "https://youtube.com/watch?v=chat-tutorial",
                },
                {
                  incoming: true,
                  preview: "https://via.placeholder.com/300x150",
                  message: "Here's a useful documentation link.",
                  url: "https://docs.example.com",
                },
              ].map((el, index) => (
                <div
                  key={index}
                  className={`flex `}
                >
                  <div
                    className={`rounded-md max-w-72 bg-white/95 shadow-sm border border-neutral-200 shadow-neutral-200 cursor-pointer hover:bg-white/80`}
                  >
                    <div className="space-y-2">
                      <div className="p-2 bg-gray-100 rounded-md space-y-1.5">
                        {/* Preview Image */}
                        <img
                          src={faker.image.food()}
                          alt={faker.person.fullName()}
                          className="w-full h-24 object-cover rounded-md"
                        />
              
                        {/* Link Metadata */}
                        <div className="space-y-0.5">
                          <p className="text-sm font-medium text-neutral-600">
                            Creating Chat App
                          </p>
                          <a
                            href={el.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-500 hover:underline block truncate"
                          >
                            {new URL(el.url).hostname}
                          </a>
                        </div>
              
                        {/* Message Text */}
                        <p
                          className={`text-sm `}
                        >
                          {el.message}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* {activeTab === "docs" && (
            <div className="space-y-2">
              {["Document.pdf", "Notes.txt"].map((doc, index) => (
                <div key={index} className="flex items-center p-2 bg-white/95 shadow-sm border border-neutral-200 shadow-neutral-200 cursor-pointer hover:bg-white/80 rounded-md">
                  <span className="text-sm text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
          )} */}
          
          {activeTab === "docs" && (
            <div className="space-y-3">
              {[
                {
                  filename: "Abstract.png",
                  message: "Here’s the design file for review.",
                  type: "image",
                },
                {
                  filename: "Project.pdf",
                  message: "Project requirements document.",
                  type: "pdf",
                },
              ].map((el, index) => (
                <div key={index} className="flex">
                  <div className="p-1.5 bg-gray-100 rounded-lg shadow-md max-w-72">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 bg-white rounded-md">
                        <CiImageOn className="text-gray-500 text-2xl" />

                        <span className="text-sm text-gray-800 flex-1 truncate">
                          {el.filename}
                        </span>

                        {/* <button
                          className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                          aria-label="Download file"
                        >
                          <HiOutlineDownload className="text-gray-500 opacity-70 text-xl" />
                        </button> */}
                      </div>

                      {/* Message Text */}
                      <p className="text-sm text-gray-700">{el.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </Stack>
    </Box>
  );
};

export default index;

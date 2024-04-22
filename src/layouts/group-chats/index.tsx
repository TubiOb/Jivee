import { Box } from "@chakra-ui/react"
import { useState } from "react";
import { DefaultInput } from "../../components";


const index = () => {
  const [ searchValue, setSearchValue ] = useState("");
  
  const handleBlur = () => {
      // Do something when the input field loses focus
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Do something when the input value changes
      setSearchValue(e.target.value);
  };

  return (
    <div className="w-full flex flex-col items-center justify-start gap-1">
        <div className="w-full flex items-center justify-center">
          <DefaultInput height='34px' name='search' value={searchValue} type='search' color="purple.500" shadow='md' onBlur={handleBlur} bgColor='purple.100' width='80%' onChange={handleChange} focusBorderColor='purple.500' className='flex items-center mx-auto focus-within:bg-white fixed text-base' />
        </div>
        <Box className="trick w-full flex flex-col items-center justify-start gap-1 overflow-auto" maxH='calc(100vh - 200px)'>
          <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200">
            <div className="w-[40%] md:w-[10%] lg:w-[20%]"><img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhdHxlbnwwfHwwfHx8MA%3D%3D" alt="" /></div>
            <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden">
              <h4 className="text-sm font-medium">The Boys</h4>
              <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
            </div>
          </div>
          <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200">
            <div className="w-[40%] md:w-[10%] lg:w-[20%]"><img src="" alt="" /></div>
            <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden">
              <h4 className="text-sm font-medium">The Boys</h4>
              <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
            </div>
          </div>
          <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200">
            <div className="w-[40%] md:w-[10%] lg:w-[20%]"><img src="" alt="" /></div>
            <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden">
              <h4 className="text-sm font-medium">The Boys</h4>
              <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
            </div>
          </div>
          <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200">
            <div className="w-[40%] md:w-[10%] lg:w-[20%]"><img src="" alt="" /></div>
            <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden">
              <h4 className="text-sm font-medium">The Boys</h4>
              <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
            </div>
          </div>
          <div className="flex flex-row p-1 items-center justify-start w-full  rounded-xl bg-white border border-neutral-200">
            <div className="w-[40%] md:w-[10%] lg:w-[20%]"><img src="" alt="" /></div>
            <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden">
              <h4 className="text-sm font-medium">The Boys</h4>
              <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
            </div>
          </div>
          <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200">
            <div className="w-[40%] md:w-[10%] lg:w-[20%]"><img src="" alt="" /></div>
            <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden">
              <h4 className="text-sm font-medium">The Boys</h4>
              <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
            </div>
          </div>
          <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200">
            <div className="w-[40%] md:w-[10%] lg:w-[20%]"><img src="" alt="" /></div>
            <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden">
              <h4 className="text-sm font-medium">The Boys</h4>
              <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
            </div>
          </div>
          <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200">
            <div className="w-[40%] md:w-[10%] lg:w-[20%]"><img src="" alt="" /></div>
            <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden">
              <h4 className="text-sm font-medium">The Boys</h4>
              <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
            </div>
          </div>
          <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200">
            <div className="w-[40%] md:w-[10%] lg:w-[20%]"><img src="" alt="" /></div>
            <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden">
              <h4 className="text-sm font-medium">The Boys</h4>
              <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
            </div>
          </div>
          <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200">
            <div className="w-[40%] md:w-[10%] lg:w-[20%]"><img src="" alt="" /></div>
            <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden">
              <h4 className="text-sm font-medium">The Boys</h4>
              <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
            </div>
          </div>
        </Box>
    </div>
  )
}

export default index
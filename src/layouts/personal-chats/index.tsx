import { Avatar, AvatarBadge, Box } from "@chakra-ui/react"
import { useState } from "react";
import { DefaultInput } from "../../components";
// import { BiSolidMessageSquareAdd } from "react-icons/bi";


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
    <div className="w-full flex flex-col items-center justify-start gap-1 flex-grow h-full" >
      <div className="w-full flex items-center justify-center">
        <DefaultInput height='34px' name='search' value={searchValue} type='search' color="purple.500" shadow='md' onBlur={handleBlur} borderColor="purple.300" placeholder="Search..." bgColor='purple.100' width='80%' onChange={handleChange} focusBorderColor='purple.300' className='flex items-center mx-auto focus-within:bg-white fixed text-sm' />
      </div>
      <Box className="w-full h-full flex flex-col items-center justify-start gap-1">
        <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
          <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
            <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
          </Avatar>
          <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
            <h4 className="text-sm font-medium">Oba1</h4>
            <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
          </div>
        </div>
        <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
          <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
            <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
          </Avatar>
          <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
            <h4 className="text-sm font-medium">Oba2</h4>
            <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
          </div>
        </div>
        <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
          <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
            <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
          </Avatar>
          <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
            <h4 className="text-sm font-medium">Oba3</h4>
            <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
          </div>
        </div>
        <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
          <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
            <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
          </Avatar>
          <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
            <h4 className="text-sm font-medium">Oba4</h4>
            <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
          </div>
        </div>
        <div className="flex flex-row p-1 items-center justify-start w-full  rounded-xl bg-white border border-neutral-200 gap-2">
          <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
            <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
          </Avatar>
          <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
            <h4 className="text-sm font-medium">Oba5</h4>
            <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
          </div>
        </div>
        <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
          <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
            <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
          </Avatar>
          <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
            <h4 className="text-sm font-medium">Oba6</h4>
            <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
          </div>
        </div>
        <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
          <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
            <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
          </Avatar>
          <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
            <h4 className="text-sm font-medium">Oba7</h4>
            <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
          </div>
        </div>
        <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
          <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
            <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
          </Avatar>
          <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
            <h4 className="text-sm font-medium">Oba8</h4>
            <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
          </div>
        </div>
        <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
          <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
            <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
          </Avatar>
          <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
            <h4 className="text-sm font-medium">Oba9</h4>
            <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
          </div>
        </div>
        <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
          <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
            <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
          </Avatar>
          <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
            <h4 className="text-sm font-medium">Oba0</h4>
            <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
          </div>
        </div>
        <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
          <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
            <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
          </Avatar>
          <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
            <h4 className="text-sm font-medium">Oba01</h4>
            <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
          </div>
        </div>
        <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
          <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
            <AvatarBadge boxSize='.85rem' className='bg-purple-500/90   avatar-badge-ripple' />
          </Avatar>
          <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
            <h4 className="text-sm font-medium">Oba02</h4>
            <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
          </div>
        </div>
      </Box>
      
      {/* <button className='flex fixed bottom-[6%] md:bottom-[8%] xl:bottom-[5%] items-center z-20 cursor-pointer px-2 py-2 group rounded-xl md:shadow-lg outline-none border-none bg-purple-600 dark:bg-purple-600 dark:hover:bg-white gap-1 hover:bg-white hover:shadow-neutral-400 text-white dark:hover:text-purple-600 dark:text-white hover:text-purple-600'>
          <BiSolidMessageSquareAdd size={20} /> 
      </button> */}
  </div>
  )
}

export default index
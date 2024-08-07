import { Avatar, AvatarBadge, Box } from "@chakra-ui/react"
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
    <div className="w-full flex flex-col items-center justify-start gap-1 flex-grow h-full">
        <div className="w-full flex items-center justify-center">
          <DefaultInput height='34px' name='search' value={searchValue} type='search' color="purple.500" shadow='md' onBlur={handleBlur} bgColor='purple.100' width='80%' onChange={handleChange} focusBorderColor='purple.500' className='flex items-center mx-auto focus-within:bg-white fixed text-base' />
        </div>
        <Box className="w-full flex flex-col items-center justify-start gap-1">
          <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
            <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
              <AvatarBadge boxSize='.85rem' className='bg-purple-500/90 avatar-badge-ripple' />
            </Avatar>
            <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
              <h4 className="text-sm font-medium">The Boys</h4>
              <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
            </div>
          </div>
          <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
            <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
              <AvatarBadge boxSize='.85rem' className='bg-purple-500/90 avatar-badge-ripple' />
            </Avatar>
            <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
              <h4 className="text-sm font-medium">The Boys</h4>
              <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
            </div>
          </div>
          <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
            <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
              <AvatarBadge boxSize='.85rem' className='bg-purple-500/90 avatar-badge-ripple' />
            </Avatar>
            <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
              <h4 className="text-sm font-medium">The Boys</h4>
              <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
            </div>
          </div>
          <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
            <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
              <AvatarBadge boxSize='.85rem' className='bg-purple-500/90 avatar-badge-ripple' />
            </Avatar>
            <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
              <h4 className="text-sm font-medium">The Boys</h4>
              <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
            </div>
          </div>
          <div className="flex flex-row p-1 items-center justify-start w-full  rounded-xl bg-white border border-neutral-200 gap-2">
            <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
              <AvatarBadge boxSize='.85rem' className='bg-purple-500/90 avatar-badge-ripple' />
            </Avatar>
            <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
              <h4 className="text-sm font-medium">The Boys</h4>
              <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
            </div>
          </div>
          <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
            <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
              <AvatarBadge boxSize='.85rem' className='bg-purple-500/90 avatar-badge-ripple' />
            </Avatar>
            <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
              <h4 className="text-sm font-medium">The Boys</h4>
              <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
            </div>
          </div>
          <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
            <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
              <AvatarBadge boxSize='.85rem' className='bg-purple-500/90 avatar-badge-ripple' />
            </Avatar>
            <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
              <h4 className="text-sm font-medium">The Boys</h4>
              <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
            </div>
          </div>
          <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
            <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
              <AvatarBadge boxSize='.85rem' className='bg-purple-500/90 avatar-badge-ripple' />
            </Avatar>
            <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
              <h4 className="text-sm font-medium">The Boys</h4>
              <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
            </div>
          </div>
          <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
            <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
              <AvatarBadge boxSize='.85rem' className='bg-purple-500/90 avatar-badge-ripple' />
            </Avatar>
            <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
              <h4 className="text-sm font-medium">The Boys</h4>
              <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
            </div>
          </div>
          <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
            <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
              <AvatarBadge boxSize='.85rem' className='bg-purple-500/90 avatar-badge-ripple' />
            </Avatar>
            <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
              <h4 className="text-sm font-medium">The Boys</h4>
              <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
            </div>
          </div>
          <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
            <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
              <AvatarBadge boxSize='.85rem' className='bg-purple-500/90 avatar-badge-ripple' />
            </Avatar>
            <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
              <h4 className="text-sm font-medium">The Boys</h4>
              <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
            </div>
          </div>
          <div className="flex flex-row p-1 items-center justify-start w-full rounded-xl bg-white border border-neutral-200 gap-2">
            <Avatar className="inline-block rounded-full ring-2 ring-white cursor-pointer" size={['sm', 'md']} src="">
              <AvatarBadge boxSize='.85rem' className='bg-purple-500/90 avatar-badge-ripple' />
            </Avatar>
            <div className="px-1 flex flex-col items-start justify-center gap-2 overflow-hidden cursor-pointer">
              <h4 className="text-sm font-medium">The Boys</h4>
              <p className="leading-5 overflow-hidden break-normal whitespace-nowrap text-sm text-neutral-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
            </div>
          </div>
        </Box>
    </div>
  )
}

export default index
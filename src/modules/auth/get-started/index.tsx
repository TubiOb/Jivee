import { Jivee } from '../../../components';
import Chat from '../../../assets/Group Chat-bro.svg' 
import Defaultbutton from '../../../components/buttons/Defaultbutton'
import { Dispatch, SetStateAction, useState } from 'react';

interface SetupStepPropsType {
    setSetupStep: Dispatch<SetStateAction<number>>;
    setupStep: any;
    details: any;
    setDetails: any;
}

const index = ({
    details,
    setupStep,
    setDetails,
    setSetupStep,
  }: SetupStepPropsType) => {

  return (
    <div className='flex bg-white w-full h-screen flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-4 px-3 py-4'>
        <div className='w-full lg:w-[50%] lg:h-screen flex flex-col items-center justify-between lg:justify-center gap-10 lg:gap-3 p-1'>
            <div className="lg:hidden flex">
                <Jivee />
            </div>
            <div className='w-full h-[80%] lg:h-[70%]'>
                <img src={Chat} alt='Jivee chat' className=' w-full h-full' />
            </div>
        </div>
        <div className='w-full lg:w-[50%] lg:h-screen flex flex-col items-center text-center justify-center gap-3 lg:gap-9 p-1'>
            <div className="hidden lg:flex">
                <Jivee />
            </div>
            <div className='flex flex-col gap-3'>
                <h4 className='font-semibold text-lg lg:text-xl'>Let's start the chat!</h4>
                <p className='text-lg lg:text-xl text-neutral-500'>Connect with friends and family, securely and privately!</p>
                <Defaultbutton type='submit' bg='purple.400' width={['100%', '80%', '80%', '80%']} mx='auto' cursor='pointer' color="white" shadow="base" fontSize={['14px', '15px', '18px']} onClick={() => setSetupStep(setupStep + 1)} >{'Get Started'}</Defaultbutton>
            </div>
           
        </div>
    </div>
  )
}

export default index
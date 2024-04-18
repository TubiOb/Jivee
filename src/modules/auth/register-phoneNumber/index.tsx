import Defaultbutton from '../../../components/buttons/Defaultbutton'
import { Dispatch, SetStateAction } from "react";
import { DefaultInput, Jivee } from '../../../components';
import '../../../index.css'

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

  const handleBlur = () => {
    // Do something when the input field loses focus
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Do something when the input value changes
  };

  return (
    <div className="w-full h-screen flex bg-white flex-col items-start lg:items-center lg:justify-between gap-10 lg:gap-4 px-3 py-4">
        <div className='w-full lg:w-[50%] flex flex-col items-start md:items-center lg:items-center justify-between lg:justify-center gap-1 p-1'>
            <Jivee />
            <div className='flex flex-col gap-1 items-start'>
              <h4 className='text-base lg:text-lg font-semibold tracking-wide'>Hi! Welcome to Jivee</h4>
              <p className='text-sm lg:text-lg tracking-normal text-neutral-500'>Create your account</p>
            </div>
        </div>
        <div className='w-full lg:w-[50%] h-screen flex flex-col items-start md:items-center lg:items-center justify-start gap-1 px-1 lg:px-3 py-3 lg:py-14'>
          <div className='flex flex-col gap-3'>
            <p className='text-sm lg:text-lg tracking-normal font-semibold'>Enter your phone number</p>
            <div className='flex flex-row gap-1 items-center'>
                <div className='rounded-lg bg-purple-400/65 w-14 h-11 border border-purple-700'></div>
                <DefaultInput height='44px' name='phoneNumber' value={details.phoneNumber} type='number' shadow='md' onBlur={handleBlur} bgColor='purple.300' onChange={handleChange} focusBorderColor='purple.500' className='flex items-center focus-within:bg-white text-base' />
            </div>
            <p className='text-xs lg:text-sm tracking-normal text-neutral-500'>Securing your personal information is our priority.</p>
            <Defaultbutton type='submit' bg='purple.400' width={['100%', '100%', '100%', '100%']} mx='auto' cursor='pointer' color="white" shadow="base" fontSize={['14px', '15px', '15px']} onClick={() => setSetupStep(setupStep + 1)} className='mt-9' >{'Next'}</Defaultbutton>
          </div>
          
        </div>
    </div>
  )
}

export default index
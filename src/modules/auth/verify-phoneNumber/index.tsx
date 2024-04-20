import { Dispatch, SetStateAction } from "react";
import { DefaultInput } from '../../../components';
import Defaultbutton from '../../../components/buttons/Defaultbutton'
import SetupBackbutton from "../../../components/buttons/SetupBackbutton";

interface SetupStepPropsType {
    setSetupStep: Dispatch<SetStateAction<number>>;
    setupStep: any;
    details: any;
    setDetails: any;
}

const index = ({
    details,
    setupStep,
    // setDetails,
    setSetupStep,
  }: SetupStepPropsType) => {
    const handleBlur = () => {
    // Do something when the input field loses focus
    };

    const handleChange = (_e: React.ChangeEvent<HTMLInputElement>) => {
    // Do something when the input value changes
    };

  return (
    <div className="flex bg-white w-full h-screen flex-col items-center justify-start gap-10 lg:gap-4 px-3 py-4">
        <SetupBackbutton currentStep={setupStep} setSetupStep={setSetupStep} />
        <div className="flex flex-col w-full md:w-[60%] xl:w-[50%] h-screen my-auto items-center justify-start gap-2 p-1">
            <h4 className='text-base lg:text-xl font-semibold tracking-wide mb-5'>Verify Phone</h4>
            <p></p>
            <div className="flex flex-col items-center gap-2 py-3">
              <div className="flex flex-row w-[80%] gap-2 md:w-[60%] lg:w-[40%] mx-auto">
                  <DefaultInput height='44px' name='phoneNumber' value={details.phoneNumber} type='number' shadow='lg' onBlur={handleBlur} bgColor='purple.300' onChange={handleChange} focusBorderColor='purple.500' maxLength={1} className='flex items-center focus-within:bg-white text-base' />
                  <DefaultInput height='44px' name='phoneNumber' value={details.phoneNumber} type='number' shadow='lg' onBlur={handleBlur} bgColor='purple.300' onChange={handleChange} focusBorderColor='purple.500' maxLength={1} className='flex items-center focus-within:bg-white text-base' />
                  <DefaultInput height='44px' name='phoneNumber' value={details.phoneNumber} type='number' shadow='lg' onBlur={handleBlur} bgColor='purple.300' onChange={handleChange} focusBorderColor='purple.500' maxLength={1} className='flex items-center focus-within:bg-white text-base' />
                  <DefaultInput height='44px' name='phoneNumber' value={details.phoneNumber} type='number' shadow='lg' onBlur={handleBlur} bgColor='purple.300' onChange={handleChange} focusBorderColor='purple.500' maxLength={1} className='flex items-center focus-within:bg-white text-base' />
              </div>
              <h5 className='text-sm lg:text-base font-medium tracking-wide'>Didn't get OTP Code</h5>
              <button type="submit" className="text-purple-700 text-sm font-semibold">Resend Code</button>

              <div className="w-[80%] lg:w-[40%] mx-auto">
                  <Defaultbutton type='submit' bg='purple.400' width={['100%', '100%', '100%', '100%']} mx='auto' cursor='pointer' color="white" shadow="base" fontSize={['14px', '15px', '15px']} onClick={() => setSetupStep(setupStep + 1)} className='mt-6' >{'Verify'}</Defaultbutton>
              </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default index
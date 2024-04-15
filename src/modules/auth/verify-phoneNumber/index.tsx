import { Dispatch, SetStateAction } from "react";
import { DefaultInput } from '../../../components';
import Defaultbutton from '../../../components/buttons/Defaultbutton'

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
    <div className="flex bg-white w-full h-screen flex-col items-center justify-start lg:justify-between gap-10 lg:gap-4 px-3 py-4">
        <div className="flex flex-col w-full lg:w-[50%] h-[80%] my-auto items-center justify-start gap-1 p-1">
            <h4 className='text-base lg:text-lg font-semibold tracking-wide my-3'>Verify Phone</h4>
            <p></p>
            <div className="flex flex-row w-[80%] lg:w-[40%] mx-auto">
                <DefaultInput height='54px' name='phoneNumber' value={details.phoneNumber} type='number' shadow='lg' onBlur={handleBlur} bgColor='purple.300' onChange={handleChange} focusBorderColor='purple.500' maxLength={1} />
                <DefaultInput height='54px' name='phoneNumber' value={details.phoneNumber} type='number' shadow='lg' onBlur={handleBlur} bgColor='purple.300' onChange={handleChange} focusBorderColor='purple.500' maxLength={1} />
                <DefaultInput height='54px' name='phoneNumber' value={details.phoneNumber} type='number' shadow='lg' onBlur={handleBlur} bgColor='purple.300' onChange={handleChange} focusBorderColor='purple.500' maxLength={1} />
                <DefaultInput height='54px' name='phoneNumber' value={details.phoneNumber} type='number' shadow='lg' onBlur={handleBlur} bgColor='purple.300' onChange={handleChange} focusBorderColor='purple.500' maxLength={1} />
            </div>
            <h5 className='text-sm lg:text-base font-medium tracking-wide'>Didn't get OTP Code</h5>
            <button type="submit" className="text-purple-700 text-sm font-semibold">Resend Code</button>

            <div className="w-[80%] mx-auto">
                <Defaultbutton type='submit' bg='purple.400' width={['100%', '100%', '100%', '100%']} mx='auto' cursor='pointer' color="white" shadow="base" fontSize={['14px', '15px', '15px']} onClick={() => setSetupStep(setupStep + 1)} className='mt-9' >{'Verify'}</Defaultbutton>
            </div>
            
        </div>
    </div>
  )
}

export default index
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { DefaultInput, Jivee } from '../../../components';
import Defaultbutton from '../../../components/buttons/Defaultbutton'
import SetupBackbutton from "../../../components/buttons/SetupBackbutton";

interface SetupStepPropsType {
    setSetupStep: Dispatch<SetStateAction<number>>;
    setupStep: any;
    details: any;
    setDetails: any;
    confirmation: any;
    setConfirmation: Dispatch<SetStateAction<any>>;
}

const OTP_LENGTH = 6;

const index = ({
    details,
    setupStep,
    setDetails,
    setSetupStep,
    confirmation,
    // @ts-ignore
    setConfirmation,
  }: SetupStepPropsType) => {
    const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
    const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(OTP_LENGTH).fill(null));

    useEffect(() => {
      if (setupStep === 3) {
          inputRefs.current[0]?.focus();
          console.log('Input refs:', inputRefs.current);
      }
    }, [setupStep]);

    
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>, index: number) => {
      const value = e.target.value;
      if (!/^\d$/.test(value)) {
        console.error(`Invalid input at position ${index}: ${value}`);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const value = e.target.value;
      if (/^\d$/.test(value) || value === '') {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        setDetails({ ...details, otp: newOtp.join('') });

          // Navigate to the next input field if a digit is entered
        if (value !== '' && index < OTP_LENGTH - 1) {
          inputRefs.current[index + 1]?.focus();
        }
        else if (value === '' && index > 0) {
          inputRefs.current[index - 1]?.focus();
        }
      }
    };



    const verifyOTP = async () => {
      const otpString = otp.join("");
      try {
        await confirmation.confirm(otpString);
        setDetails({ ...details, otp: otpString, verified: true });
        setSetupStep(setupStep + 1);
      }
      catch (err) {
        console.error('OTP verification failed:', err);
      }
    }
    

    const resendCode = () => {
      setSetupStep(setupStep - 1);
    }

  return (
    <div className="flex bg-white w-full h-screen flex-col items-center justify-start gap-10 lg:gap-4 px-3 py-4">
        <SetupBackbutton currentStep={setupStep} setSetupStep={setSetupStep} />
        <div className="flex flex-col w-full md:w-[60%] xl:w-[50%] items-center justify-center gap-4 p-1">
            <Jivee />
            <h4 className='text-base lg:text-xl font-semibold tracking-wide'>Verify Phone</h4>
            {/* <p></p> */}
        </div>
        <div className="flex flex-col w-full md:w-[60%] xl:w-[50%] my-auto items-center justify-center gap-4 p-1">   
            <div className="flex flex-col items-center justify-center gap-8 py-3">
              <div className="flex flex-row w-full gap-1 md:gap-2 md:w-[85%] lg:w-[70%] xl:w-[60%] mx-auto mb-5">
                {otp.map((digit, index) => (
                  <DefaultInput key={index} ref={(el: HTMLInputElement | null) => (inputRefs.current[index] = el)} height='44px' name={`otp${index}`} id={`otp${index}`} value={digit} type='number' shadow='lg' onBlur={(e) => handleBlur(e as React.FocusEvent<HTMLInputElement>, index)} bgColor='purple.300' onChange={(e) => handleChange(e, index)} focusBorderColor='purple.500' maxLength='1' className='flex items-center text-center focus-within:bg-white text-base' />
                ))}
                  
                  {/* <DefaultInput height='44px' name='phoneNumber' value={details} type='number' shadow='lg' onBlur={handleBlur} bgColor='purple.300' onChange={handleChange} focusBorderColor='purple.500' maxLength='1' className='flex items-center text-center focus-within:bg-white text-base' />
                  <DefaultInput height='44px' name='phoneNumber' value={details} type='number' shadow='lg' onBlur={handleBlur} bgColor='purple.300' onChange={handleChange} focusBorderColor='purple.500' maxLength='1' className='flex items-center text-center focus-within:bg-white text-base' />
                  <DefaultInput height='44px' name='phoneNumber' value={details} type='number' shadow='lg' onBlur={handleBlur} bgColor='purple.300' onChange={handleChange} focusBorderColor='purple.500' maxLength='1' className='flex items-center text-center focus-within:bg-white text-base' /> */}
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <h5 className='text-sm lg:text-base font-medium tracking-wide'>Didn't get OTP Code</h5>
                <button type="submit" className="text-purple-700 text-sm font-semibold" onClick={resendCode}>Resend Code</button>
              </div>

              <div className="w-[80%] md:w-[75%] lg:w-[60%] xl:w-[50%] mx-auto">
                  <Defaultbutton type='submit' bg='purple.400' width={['100%', '100%']} mx='auto' cursor='pointer' color="white" shadow="base" fontSize={['14px', '15px', '15px']} onClick={verifyOTP} >{'Verify'}</Defaultbutton>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default index
import Defaultbutton from '../../../components/buttons/Defaultbutton'
import { Dispatch, SetStateAction, useState } from "react";
import { DefaultInput, Jivee, PhoneInput } from '../../../components';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from '../../../firebase';
import '../../../index.css'
import Toast from '../../../Toast';
import { toast } from 'sonner';

interface SetupStepPropsType {
  setSetupStep: Dispatch<SetStateAction<number>>;
  setupStep: any;
  details: any;
  setDetails: any;
  confirmation: any;
  setConfirmation: Dispatch<SetStateAction<any>>;
}

const index = ({
  details,
  setupStep,
  setDetails,
  setSetupStep,
  // @ts-ignore
  confirmation,
  setConfirmation,
}: SetupStepPropsType) => {

  const [errors, setErrors] = useState<{ [key: string]: string }>({});



  const sendOTP = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, 'recaptcha', {
        'size': 'invisible', // Adjust according to your UI needs
        'callback': (response: any) => {
        // Handle reCAPTCHA verification successful
        console.log('reCAPTCHA verified:', response);
      },
      'expired-callback': () => {
        // Handle reCAPTCHA verification expired
        console.log('reCAPTCHA expired');
      },
      });
      const confirmation = await signInWithPhoneNumber(auth, details.phoneNumber, recaptcha);
      localStorage.setItem('userPhoneNumber', details.phoneNumber);
      setConfirmation(confirmation);
      showToastMessage('an OTP has been sent to you.', 'success')
      return confirmation;
    }
    catch (err) {

    }
  };



  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let error = '';

    if (name === 'email') {
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = 'Please enter a valid email address.';
        showToastMessage('Please, enter a valid email', 'error')
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({...details, [e.target.name]: e.target.value });
  };


  const handlePhoneNumberChange = (phoneNumber: string) => {
    setDetails({...details, phoneNumber});
  };



  const handleNextClick = async () => {
    await sendOTP();
    setSetupStep(setupStep + 1);
  };



    //   CONFIGURING TOAST TO TOAST MESSAGE
  const showToastMessage = (message: any, type: 'success' | 'error' | 'warning') => {
  switch (type) {
      case 'success':
          toast.success(message, {
              position: 'top-right',
              duration: 3000,
              // preventDefault: true,
          });
          break;
      case 'error':
          toast.error(message, {
              position: 'top-right',
              duration: 3000,
              // preventDefault: true,
          });
          break;
      case 'warning':
          toast.warning(message, {
              position: 'top-right',
              duration: 3000,
              // preventDefault: true,
          });
          break;
      default:
          break;
    }
  };



  return (
    <div className="w-full h-screen flex bg-white flex-col items-start lg:items-center lg:justify-between gap-10 lg:gap-4 px-3 py-4">
        <div className='w-full lg:w-[50%] flex flex-col items-center justify-between lg:justify-center gap-3 p-1'>
            <Jivee />
            <div className='flex flex-col gap-2 items-center'>
              <h4 className='text-base lg:text-lg font-semibold tracking-wide'>Hi! Welcome to Jivee</h4>
              <p className='text-sm lg:text-lg tracking-normal text-neutral-500'>Create your account</p>
            </div>
        </div>
        <div className='w-full lg:w-[50%] h-screen flex flex-col items-center justify-center gap-1 px-1 lg:px-3 py-3 lg:py-14'>
          <div className='flex flex-col gap-3'>
            <p className='text-sm lg:text-lg tracking-normal font-semibold'>Enter your phone number</p>
            {/* <div className='flex flex-row gap-1 items-center'>
                <div className='rounded-lg bg-purple-400/65 w-14 h-11 border border-purple-700'></div>
                <DefaultInput height='44px' name='phoneNumber' value={details.phoneNumber || ''} type='number' shadow='md' onBlur={handleBlur} bgColor='purple.300' onChange={handleChange} focusBorderColor='purple.500' className='flex items-center focus-within:bg-white text-base' />
            </div> */}
            <PhoneInput value={details.phoneNumber || ''} onValueChange={handlePhoneNumberChange} />
            <div id="recaptcha"></div>
            <div className='flex flex-col gap-3 mt-4'>
              <p className='text-sm lg:text-lg tracking-normal font-semibold'>Enter your email address</p>
              <DefaultInput height='44px' name='email' type='email' value={details.email || ''} shadow='md' onBlur={(e) => handleBlur(e as React.FocusEvent<HTMLInputElement>)} onChange={handleChange} placeholder='Email address' bgColor='purple.300' focusBorderColor='purple.500' className='flex items-center focus-within:bg-white text-base ml-0' />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>
            <p className='text-xs lg:text-sm tracking-normal text-neutral-500'>Securing your personal information is our priority.</p>
            <Defaultbutton type='submit' bg='purple.400' width={['100%', '100%', '100%', '100%']} mx='auto' cursor='pointer' color="white" shadow="base" fontSize={['14px', '15px', '15px']} onClick={handleNextClick} className='mt-9' >{'Next'}</Defaultbutton>
          </div>
          
        </div>

        <Toast showToast={showToastMessage} />
    </div>
  )
}

export default index
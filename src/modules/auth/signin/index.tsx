import React, { useState, useEffect, useRef, useTransition } from 'react';
import {
  Box,
  VStack,
  Button,
  Text,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult, User, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './../../../components/management/appState';
import { auth } from './../../../firebase';
import { toast } from 'sonner';
import { DefaultInput, Jivee, PhoneInput } from '../../../components';
import Toast from '../../../Toast';
import useCountdown from '../../../hooks/countdown';

const OTP_LENGTH = 6;

const index: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  // const [email, setEmail] = useState<string>('');
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [recaptchaReady, setRecaptchaReady] = useState<boolean>(false);
  // @ts-ignore
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isPending, startTransition] = useTransition();
  const { timeLeft, isActive, startCountdown } = useCountdown(60);

  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(OTP_LENGTH).fill(null));

  const navigate = useNavigate();
  const { dispatch } = useAppContext();

  const showToastMessage = (message: string, type: 'success' | 'error' | 'warning') => {
    switch (type) {
      case 'success':
        toast.success(message, { position: 'top-right', duration: 3000 });
        break;
      case 'error':
        toast.error(message, { position: 'top-right', duration: 3000 });
        break;
      case 'warning':
        toast.warning(message, { position: 'top-right', duration: 3000 });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (confirmationResult && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [confirmationResult]);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/j');
      }
    });
    return () => unsubscribe();
  }, [navigate]);


  useEffect(() => {
    const recaptchaContainer = document.getElementById('recaptcha');
    if (recaptchaContainer) {
      const timer = setTimeout(() => {
        setRecaptchaReady(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigate('/j'); // Redirect to app if already authenticated
      }
    });

    return () => unsubscribe();
  }, [navigate]);
  
  const handleSendOtp = async () => {
    setError(null);
    setLoading(true);

    startTransition(() => {
      const formattedPhoneNumber = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
  
      if (!formattedPhoneNumber) {
        setError('Please enter a valid phone number.');
        setLoading(false);
        return;
      }
      if (!recaptchaReady) {
        setError('reCAPTCHA is not ready. Please wait a moment or refresh.');
        setLoading(false);
        return;
      }
  
      console.log(formattedPhoneNumber);
  
      const executeSendOtp = async () => {
        try {
          
          const recaptcha = new RecaptchaVerifier(auth, 'recaptcha', {
            'size': 'invisible',
            'callback': () => {
              setRecaptchaReady(true);
            },
            'expired-callback': () => {
              setRecaptchaReady(false);
              showToastMessage('reCAPTCHA expired. Please try again.', 'warning');
            },
          });
    
          const result = await signInWithPhoneNumber(auth, formattedPhoneNumber, recaptcha);

          localStorage.setItem('userPhoneNumber', formattedPhoneNumber);
          setConfirmationResult(result);

          startCountdown();
    
          showToastMessage('An OTP has been sent to your phone', 'success');
        } catch (err: any) {
          console.error('Error sending OTP:', err);
          if (err.code === 'auth/invalid-phone-number') {
            setError('Invalid phone number. Please check the number');
            showToastMessage('Invalid phone number. Please check the number', 'error');
          }
          else if (err.code === 'auth/too-many-requests') {
            setError('Too many requests. Please try again later');
            showToastMessage('Too many requests. Please try again later', 'error');
          }
          else {
            setError('Failed to send OTP. Please try again');
            showToastMessage(err.message || 'Failed to send OTP. Please try again', 'error');
          }
        } finally {
          setLoading(false);
        }
      }

      executeSendOtp();
    })

  };

  
  
  
  const handleVerifyOtp = async () => {
    setError(null);
    setLoading(true);

    const otpString = otp.join("");

    if (!confirmationResult || otpString.length !== OTP_LENGTH) {
      setError('Please enter the complete OTP.');
      setLoading(false);
      return;
    }

    try {
      const userCredential = await confirmationResult.confirm(otpString);
      const user: User = userCredential.user;

      
      dispatch({ type: 'SET_AUTH_STATE', payload: { user: user, isLoggedIn: true } });

      showToastMessage('OTP successfully verified', 'success');
      navigate('/j'); // Redirect to your main app dashboard or home page
    } catch (err: any) {
      console.error('OTP verification failed:', err);
      setError(err.message || 'OTP verification failed. Please try again.');
      showToastMessage('OTP verification failed', 'error');
    } finally {
      setLoading(false);
    }
  };
  
  
  const handleResendOtp = async () => {
    await handleSendOtp();
  };
  
  
  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    let value = e.target.value;
    
    if (!/^\d$/.test(value) && value !== '') {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    if (value !== '' && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    
    else if (value === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let error = '';

    if (name === 'email') {
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = 'Please enter a valid email address.';
        showToastMessage('Please, enter a valid email', 'error')
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };
  
  
  
  
  const handleOtpKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <Box p={8} maxWidth="500px" borderWidth={1} borderRadius="lg" boxShadow="lg" margin="auto" mt={10} bg="white" fontFamily="Inter" >
      <VStack spacing={6} align="stretch">
        <VStack spacing={2} textAlign="center">
          <Jivee />
          <Text fontSize="2xl" fontWeight="bold" mt={4}>
            Hi! Welcome to Jivee
          </Text>
          <Text fontSize="md" color="gray.500">
            Create your account
          </Text>
        </VStack>

        {error && (
          <Alert status="error" borderRadius="md">
            <AlertIcon />
            {error}
          </Alert>
        )}

        {!confirmationResult ? (
          <>
            <div className='flex flex-col gap-3'>
              <p className='text-sm lg:text-lg tracking-normal font-semibold'>Enter your phone number</p>
              <PhoneInput value={phoneNumber} onValueChange={setPhoneNumber} />
            </div>

            {/* <FormControl id="email">
              <FormLabel fontSize="md" fontWeight="semibold">Enter your email address</FormLabel>
              <DefaultInput
                type="email"
                name='email'
                placeholder="Email address"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                height='44px'
                shadow='md'
                bgColor='purple.50' // Light purple background
                focusBorderColor='purple.500' // Purple border on focus
                onBlur={(e) => handleBlur(e as React.FocusEvent<HTMLInputElement>)}
                className='flex items-center focus-within:bg-white text-base'
              />
            </FormControl> */}

            <Text fontSize="xs" color="gray.500" textAlign="center">
              Securing your personal information is our priority.
            </Text>

            <Button onClick={handleSendOtp} isLoading={loading} loadingText="Sending OTP..." bg="purple.400" color="white" size="lg" width="full" borderRadius="lg" shadow="base" isDisabled={!recaptchaReady || isPending || !phoneNumber} _hover={{ bg: 'purple.500' }} >
              {recaptchaReady ? 'Next' : 'Loading...'}
            </Button>
          </>
        ) : (
          
          <>
            <Text textAlign="center" fontSize="md" fontWeight="semibold">
              Enter the 6-digit code sent to {phoneNumber}
            </Text>
            <Box display="flex" justifyContent="center" gap={2} mt={4}>
              {otp.map((digit, index) => (
                <DefaultInput key={index} ref={(el: HTMLInputElement | null) => (inputRefs.current[index] = el)} type="tel" name='tel' maxLength={1} value={digit} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOtpChange(e, index)} onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleOtpKeyDown(e, index)} onBlur={(e) => handleBlur(e as React.FocusEvent<HTMLInputElement>)} width="40px" height="44px" bgColor='purple.50' focusBorderColor="purple.500" fontSize="xl" shadow="md" />
              ))}
            </Box>
            <Button onClick={handleVerifyOtp} isLoading={loading} loadingText="Verifying..." bg="purple.400" color="white" size="lg" width="full" borderRadius="lg" shadow="base" mt={4} _hover={{ bg: 'purple.500' }} >
              Verify OTP
            </Button>
            <Button onClick={() => setConfirmationResult(null)} variant="link" colorScheme="gray" mt={2} >
              Change Phone Number
            </Button>

            <div className="flex flex-col items-center justify-center gap-2">
              <h5 className='text-sm lg:text-base font-medium tracking-wide'>
                Didn't get OTP Code?
              </h5>
              {isActive ? (
                <span className="text-sm text-gray-500">
                  Resend OTP in {timeLeft} seconds
                </span>
              ) : (
                <button type="button" className="text-purple-700 text-sm font-semibold" onClick={handleResendOtp} disabled={isActive} >
                  Resend Code
                </button>
              )}
            </div>
          </>
        )}

        
        <div id="recaptcha"></div>

        <Text fontSize="sm" color="gray.500" textAlign="center" mt={4}>
          Powered by Firebase Authentication
        </Text>
      </VStack>
      <Toast showToast={showToastMessage} />
    </Box>
  );
};

export default index;
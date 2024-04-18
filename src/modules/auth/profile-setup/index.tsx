import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { VscEdit } from "react-icons/vsc";
import Chat from '../../../assets/Group Chat-bro.svg' 
import { Defaultbutton, DefaultInput } from "../../../components";

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
    const navigate = useNavigate();

    const [userImage, setUserImage] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const handleBlur = () => {
    // Do something when the input field loses focus
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Do something when the input value changes
    };

    const handleSave = () => {
        navigate('/j');
    }

    const handleImageChange = (e : any) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setUserImage(URL.createObjectURL(file));
            // updateUserImage();
        }
    }

  return (
    <div className="flex bg-white w-full h-screen flex-col items-center justify-start lg:justify-between gap-10 lg:gap-4 px-3 py-4">
        <div className="flex flex-col w-full lg:w-[50%] h-screen my-auto items-center justify-start gap-3 p-1">
            <h4 className='text-base lg:text-xl font-semibold tracking-wide my-3'>Profile Setup</h4>
            <div className="flex flex-col items-center w-full gap-7 p-1">
                <p className="text-sm lg:text-lg tracking-normal text-neutral-500 text-center">Please enter your name and an optional profile picture</p>
                <div className='w-full lg:w-[35%] items-center justify-center flex p-1 relative'>
                    <img src={Chat} alt='chat' className='rounded-full w-16 h-16 lg:w-32 lg:h-32 object-cover ring-2 ring-purple-500/80' />
                    
                    <label htmlFor="upload" className="cursor-pointer absolute px-1 py-1 text-sm text-white lg:text-base -bottom-0 lg:-bottom-0 rounded-full bg-purple-500 z-50 shadow-sm right-[40%] md:right-[45%] lg:right-16">
                        <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="upload" />
                        <VscEdit />
                    </label>
                </div>
                <div className="block mt-6">
                    <DefaultInput height='44px' name='phoneNumber' value={details.phoneNumber} type='text' shadow='md' onBlur={handleBlur} bgColor='purple.100' onChange={handleChange} focusBorderColor='purple.500' className='flex items-center focus-within:bg-white text-base' />
                    <Defaultbutton type='submit' bg='purple.400' width={['100%', '100%', '100%', '100%']} mx='auto' cursor='pointer' color="white" shadow='lg' fontSize={['14px', '15px', '15px']} onClick={handleSave} className='mt-9' >{'Finish'}</Defaultbutton>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default index
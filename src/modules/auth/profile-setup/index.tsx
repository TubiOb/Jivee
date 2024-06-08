import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { VscEdit } from "react-icons/vsc";
import defaultUserImage from '../../../assets/defaultUser.png' 
import { Defaultbutton, DefaultInput, Jivee } from "../../../components";
import { ref, set } from "firebase/database";
import { auth, database, storage } from "../../../firebase";
import { getDownloadURL, ref as storageRef, uploadBytes } from "firebase/storage";

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
    // @ts-ignore
    setupStep,
    setDetails,
    // @ts-ignore
    setSetupStep,
    // @ts-ignore
    confirmation,
    // @ts-ignore
    setConfirmation,
  }: SetupStepPropsType) => {
    const navigate = useNavigate();
    const [userImage, setUserImage] = useState(defaultUserImage);
    const [imageFile, setImageFile] = useState<File | null>(null);



    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value });
    };



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };



    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            setUserImage(URL.createObjectURL(file));
        }
    }



    const fetchDefaultImage = async (): Promise<Blob> => {
        const response = await fetch(defaultUserImage);
        return await response.blob();
    }



    const handleSave = async () => {
        try {
            const currentUser = auth.currentUser;
            if (!currentUser) {
                throw new Error("User is not authenticated");
            }
            const uid = currentUser.uid;
            let userImageUrl = defaultUserImage;

            if (imageFile) {
                const imageRef = storageRef(storage, `userImages/${uid}`);
                console.log('Retrieved ImageRef: ', imageRef)
                await uploadBytes(imageRef, imageFile);
                userImageUrl = await getDownloadURL(imageRef);
                console.log("Uploaded image URL:", userImageUrl);
            }
            else {
                console.log('No image file to upload, uploading default image...');
                const defaultImageBlob = await fetchDefaultImage();
                const imageRef = storageRef(storage, `userImages/${uid}`);
                await uploadBytes(imageRef, defaultImageBlob);
                userImageUrl = await getDownloadURL(imageRef);
                console.log("Uploaded default image URL:", userImageUrl);
            }

            const userDetailsRef = ref(database, `users/${uid}`);
            await set(userDetailsRef, {
                username: details.username,
                phoneNumber: details.phoneNumber,
                email: details.email,
                userImage: userImageUrl,
                verified: details.verified,
            });

            navigate('/j');
        }
        catch (err) {
            console.error("Error saving details:", err);
        }
        
        console.log(details);
    }

  return (
    <div className="flex bg-white w-full h-screen flex-col items-center justify-start lg:justify-between gap-10 lg:gap-4 px-3 py-4">
        <div className="flex flex-col w-full lg:w-[50%] h-screen my-auto items-center justify-start gap-3 p-1">
            <Jivee />
            <h4 className='text-base lg:text-xl font-semibold tracking-wide my-3'>Profile Setup</h4>
            <div className="flex flex-col items-center w-full gap-7 p-1">
                <p className="text-sm lg:text-lg tracking-normal text-neutral-500 text-center">Please enter your name and an optional profile picture</p>
                <div className='w-full lg:w-[35%] items-center justify-center flex p-1 relative'>
                    <img src={userImage} alt='userImage' className='rounded-full w-16 h-16 lg:w-32 lg:h-32 object-cover ring-2 ring-purple-500/80' />
                    
                    <label htmlFor="upload" className="cursor-pointer absolute px-1 py-1 text-sm text-white lg:text-base -bottom-0 lg:-bottom-0 rounded-full bg-purple-500 z-50 shadow-sm right-[40%] md:right-[45%] lg:right-16">
                        <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="upload" />
                        <VscEdit />
                    </label>
                </div>
                <div className="block mt-6">
                    <DefaultInput height='44px' name='username' showAttachIcon={false} value={details.username} type='text' shadow='md' onBlur={(e) => handleBlur(e as React.FocusEvent<HTMLInputElement>)} bgColor='purple.100' onChange={handleChange} focusBorderColor='purple.500' className='flex items-center focus-within:bg-white text-base' />
                    <Defaultbutton type='submit' bg='purple.400' width={['100%', '100%', '100%', '100%']} mx='auto' cursor='pointer' color="white" shadow='lg' fontSize={['14px', '15px', '15px']} onClick={handleSave} className='mt-9' >{'Finish'}</Defaultbutton>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default index
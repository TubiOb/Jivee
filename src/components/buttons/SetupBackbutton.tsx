import { BiLeftArrowAlt } from 'react-icons/bi'
import { Dispatch, SetStateAction } from 'react';

interface BackbuttonPropsType {
  setSetupStep: Dispatch<SetStateAction<number>>;
  currentStep: any;
}

const SetupBackbutton = ({
  setSetupStep,
  currentStep,
}: BackbuttonPropsType) => {
  
    const handleGoBack = () => {
      if (currentStep > 1) {
        setSetupStep(currentStep - 1);
      }
    }

  return (
    <div className='bg-purple-500 items-center justify-center flex p-1 md:p-1.5 rounded-full self-start mt-2 hover:cursor-pointer hover:font-semibold absolute md:top-10 md:left-5 left-5 top-7' onClick={handleGoBack}>
        <BiLeftArrowAlt className='text-white' size={18} />
    </div>
  )
}

export default SetupBackbutton
import { useState } from 'react';
import RegisterNumber from '../register-phoneNumber/index';
import { GetStarted } from '../..';

const index = () => {

    const [ setupStep, setSetupStep ] = useState(1);
    const [ details, setDetails ] = useState([]);
    

  return (
    <div className='flex bg-white w-full h-screen'>
        {setupStep === 1 && (
            <GetStarted
                details={details}
                setupStep={setupStep}
                setDetails={setDetails}
                setSetupStep={setSetupStep} />
        )}
        {setupStep === 2 && (
            <RegisterNumber
                details={details}
                setupStep={setupStep}
                setDetails={setDetails}
                setSetupStep={setSetupStep} />
        )}
    </div>
  )
}

export default index
import { useState } from 'react';
import { RegisterNumber, GetStarted, VerifyNumber } from '../..';

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
        {setupStep === 3 && (
            <VerifyNumber
                details={details}
                setupStep={setupStep}
                setDetails={setDetails}
                setSetupStep={setSetupStep} />
        )}
    </div>
  )
}

export default index
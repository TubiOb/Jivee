import { /* useEffect, */ useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { RegisterNumber, GetStarted, VerifyNumber, ProfileSetup } from '../..';
// import { auth } from '../../../firebase';

const index = () => {

    const [ setupStep, setSetupStep ] = useState(1);
    const [ details, setDetails ] = useState({});
    const [confirmation, setConfirmation] = useState(null);
    // const navigate = useNavigate();
    // console.log(details);

    // useEffect(() => {
    //     auth.onAuthStateChanged(user => {
    //         if (user) {
    //             navigate('/j');
    //         }
    //     });
    // }, [navigate]);
    

  return (
    <div className='flex bg-white w-full h-screen'>
        {setupStep === 1 && (
            <GetStarted
                details={details}
                setupStep={setupStep}
                setDetails={setDetails}
                setSetupStep={setSetupStep}
                confirmation={confirmation}
                setConfirmation={setConfirmation} />
        )}
        {setupStep === 2 && (
            <RegisterNumber
                details={details}
                setupStep={setupStep}
                setDetails={setDetails}
                setSetupStep={setSetupStep}
                confirmation={confirmation}
                setConfirmation={setConfirmation} />
        )}
        {setupStep === 3 && (
            <VerifyNumber
                details={details}
                setupStep={setupStep}
                setDetails={setDetails}
                setSetupStep={setSetupStep}
                confirmation={confirmation}
                setConfirmation={setConfirmation} />
        )}
        {setupStep === 4 && (
            <ProfileSetup
                details={details}
                setupStep={setupStep}
                setDetails={setDetails}
                setSetupStep={setSetupStep}
                confirmation={confirmation}
                setConfirmation={setConfirmation} />
        )}
    </div>
  )
}

export default index
import Jivee from '../../assets/Jivee Logo.png'
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import { useEffect } from 'react';

const index = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          navigate('auth/signup');
        }, 1500);
    
        return () => clearTimeout(timeoutId);
    }, [navigate]);

  return (
    <div className="w-full h-screen bg-purple-700/75 flex items-center justify-center">
        <div className="bg-white flex items-center justify-between gap-1 px-3 py-1 rounded-br-lg rounded-l-lg">
            <img src={Jivee} alt="Jivee" className='w-11 lg:w-12 h-11 lg:h-12'/>
            <h2 className='jivee font-semibold text-lg lg:text-xl'>Jivee</h2>
        </div>
    </div>
  )
}

export default index
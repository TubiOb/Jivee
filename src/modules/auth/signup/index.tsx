import Jivee from '../../../assets/Jivee Logo.png'
import Chat from '../../../assets/Group Chat-bro.svg' 
import Defaultbutton from '../../../components/buttons/Defaultbutton'


const index = () => {


  return (
    <div className='flex bg-white w-full h-screen flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-4 px-3 py-4'>
        <div className='w-full lg:w-[50%] lg:h-screen flex flex-col items-center justify-between lg:justify-center gap-10 lg:gap-3 p-1'>
            <div className="flex lg:hidden items-center justify-between gap-2.5 lg:gap-1.5 px-3 py-1">
                <img src={Jivee} alt="Jivee" className='w-11 lg:w-16 h-11 lg:h-16'/>
                <h2 className='jivee font-semibold text-lg md:text-2xl lg:text-2xl'>Jivee</h2>
            </div>
            <div className='w-full h-[80%] lg:h-[70%]'>
                <img src={Chat} alt='Jivee chat' className=' w-full h-full' />
            </div>
        </div>
        <div className='w-full lg:w-[50%] lg:h-screen flex flex-col items-center text-center justify-center gap-3 lg:gap-9 p-1'>
            <div className="hidden lg:flex items-center justify-between gap-2.5 lg:gap-1.5 px-3 py-1">
                <img src={Jivee} alt="Jivee" className='w-11 lg:w-16 h-11 lg:h-16'/>
                <h2 className='jivee font-semibold text-lg md:text-xl lg:text-2xl'>Jivee</h2>
            </div>
            <div className='flex flex-col gap-3'>
                <h4 className='font-semibold text-lg md:text-2xl lg:text-3xl'>Let's start the chat!</h4>
                <p className='text-lg md:text-2xl lg:text-3xl'>Connect with friends and family, securely and privately!</p>
                <Defaultbutton type='submit' bg='purple.400' width={['100%', '80%', '80%', '100%']} color="white" shadow="base" fontSize={['14px', '18px', '20px']} >{'Get Started'}</Defaultbutton>
            </div>
           
        </div>
    </div>
  )
}

export default index
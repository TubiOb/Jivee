import Jivee from '../../assets/Jivee.png'


const jivee = () => {
  return (
    <div className='sticky'>
        <div className="flex items-center justify-between gap-1.5 px-1 lg:px-1 py-1">
            <img src={Jivee} alt="Jivee" className='w-6 lg:w-7 h-6 lg:h-7'/>
            <h2 className='jivee font-semibold text-base md:text-lg lg:text-xl'>Jivee</h2>
        </div>
    </div>
  )
}

export default jivee
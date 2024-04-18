import Jivee from '../../assets/Jivee.png'


const jivee = () => {
  return (
    <div className='sticky'>
        <div className="flex items-center justify-between gap-1.5 px-1 lg:px-1 py-1">
            <img src={Jivee} alt="Jivee" className='w-7 lg:w-8 h-7 lg:h-8'/>
            <h2 className='jivee font-semibold text-lg md:text-2xl lg:text-2xl'>Jivee</h2>
        </div>
    </div>
  )
}

export default jivee
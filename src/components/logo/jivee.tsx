import Jivee from '../../assets/Jivee.png'


const jivee = () => {
  return (
    <div>
        <div className="flex items-center justify-between gap-1.5 px-1.5 lg:px-3 py-1">
            <img src={Jivee} alt="Jivee" className='w-10 lg:w-12 h-10 lg:h-12'/>
            <h2 className='jivee font-semibold text-lg md:text-2xl lg:text-2xl'>Jivee</h2>
        </div>
    </div>
  )
}

export default jivee
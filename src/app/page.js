import './globals.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const page = () => {
  return (
    <>
      <div className=' px-10 lg:text-center home-page flex-col flex align-middle justify-center'>
        <h1 className='text-black font-semibold text-5xl lg:text-7xl my-5'>Under Development</h1>
        <p className='my-2 font-medium'>Our developers are working hard to bring this website to life.</p>
        <p className='my-2 font-medium'>We should be there shortly. Thank you for your patience.</p>
      </div>
    </>
  )
}

export default page
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import './globals.css';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
import Head from 'next/head';
import Events from "./currentEvents.json"
import HomeEvent from './Components/HomeEvent';
import HeroSection from './Components/HeroSection';



const page = () => {
  return (
    <div className='home-page'>
      <meta name="google-site-verification" content="dT2-yyI4S6-TYfqQ-_lNtT-Mb8q-uYBQLpuOPCtiOWk" />


      <Navbar mode="light" />

      {/* <HeroSection /> */}

      <div className='py-10 home-page'>
        <h2 className='text-black font-semibold text-2xl lg:text-3xl my-5 ml-10'>Explore Events</h2>

        <div className="events flex w-screen overflow-x-scroll mt-5 pr-5" style={{ scrollbarWidth: 'none' }}>
          {Events.events.map((img, index) => (
            <div key={index} className="ml-10">
              <HomeEvent
                key={index}
                // img={teams.coreTeam[index].img}
                image={Events.events[index].image}
                title={Events.events[index].title}
                date={Events.events[index].date}
                venue={Events.events[index].venue}
                price={Events.events[index].price}
                route={Events.events[index].route}
              />
            </div>
          ))}
        </div>
        <p className='text-right mr-7 text-[#8B8A8A] text-sm mt-3'>view all</p>

        

        {/* <h1 className='text-black font-semibold text-5xl lg:text-7xl my-5'>Under Development</h1>
        <p className='my-2 font-medium'>Our developers are working hard to bring this website to life.</p>
        <p className='my-2 font-medium'>We should be there shortly. Thank you for your patience.</p> */}
      </div>
      <Footer mode="light" />
    </div>
  )
}

export default page
import Image from 'next/image'
import React from 'react'
import logo from "../../../public/BeesLogo.png"

const HeroSection = () => {
  return (
    <div className='px-10 lg:py-28 py-16 flex lg:flex-row flex-col'>
        <div className='mx-10 lg:ml-32 w-50'>
            <Image 
                src={logo}
                alt="Bees logo"
                width={500}
                height="auto"
                sizes='50vw'
            />
        </div>
        <div className='w-full text-center lg:px-48 lg:mt-0 mt-10'>
            <h1 className='text-left font-coolvetica leading-11 font-semibold lg:text-6xl text-5xl -tracking-4'>WE ARE THE DOERS, THINKERS, DREAMERS</h1>
            <h2 className='mt-2 font-coolvetica font-bold text-[#8B8A8A] text-left'>THIS IS HOW WE PICTURE IT. A SWARM OF BEES BUILDING A HIVE TO SHARE AN ECOSYSTEM. THERE IS SOMETHING INTRIGUING ABOUT THE &quot;DANCE LANGUAGE&quot; OF BEES. AND OUR TEAM IS DEDICATED TO COMMUNICATE AND BUILD A CREATIVE ECOSYSTEM IN THE MOST EFFECTIVE AND IMPACTFUL WAY.</h2>

        </div>
    </div>
  )
}

export default HeroSection
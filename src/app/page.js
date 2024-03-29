"use client";
import React, { useState, useEffect } from 'react';


import "./styles.css"


import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Image from "next/image";
import posterDesktop from "../../public/hoot_desktop.png";
import posterMobile from "../../public/hoot_mobile.png";
import scrollDown from "../../public/scrollDown.svg";

export default function Home() {

  const [windowWidth, setWindowWidth] = useState(null);
  const [imageSrc, setImageSrc] = useState(posterDesktop); // Default to desktop

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial value
    updateWindowWidth();

    // Add event listener for window resize
    window.addEventListener('resize', updateWindowWidth);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  useEffect(() => {
    // Decide which image to use based on the window width
    const mobileBreakpoint = 768; // Example breakpoint for mobile devices
    if (windowWidth <= mobileBreakpoint) {
      setImageSrc(posterMobile);
    } else {
      setImageSrc(posterDesktop);
    }
  }, [windowWidth]);



  return (
    <>
      <Navbar />
      <div className="text-center px-10 py-10">
        <div className=" mt-15 flex flex-col lg:flex-row justify-between">
          <Image
            src={imageSrc}
            priority
            width={500}
            height="auto"
            alt="Mix N Match Poster"
            className='poster'
          />
          <Image
            src={scrollDown}
            priority
            width={120}
            height="auto"
            alt="Scroll down"
            className='lg:hidden m-auto mt-3'
          />
          <div className='mt-16 lg:mt-0 text-left event-details py-7 px-10'>
            <h1 className='text-3xl lg:text-5xl text-[#560D80] font-black mb-5'>Mix N Match</h1>
            <p className=' font-bold'>Featuring</p>
            <p className=' text-[#560D80] font-bold text-2xl'>BRAINWASH</p>
            <p className=' text-[#560D80] font-bold text-2xl'>AEDRIAN</p>
            <p className=' text-[#560D80] font-bold text-2xl mb-5'>QUILLS</p>

            <p className=' font-medium text-sm'>Date: <span className='text-[#560D80] font-bold'>6th April</span></p>
            <p className=' font-medium text-sm'>Venue : <span className='text-[#560D80] font-bold'>THE YEASTERN CIVILIZATION</span></p>
            <p className=' mb-5 font-bold text-sm'>9 P.M onwards </p>
            <Button link="https://events.onlybees.in/" />
          </div>
        </div>

        {/* About Hoot Society */}
        <div className='about text-left lg:text-center lg:px-96 pb-24'>
          <h2 className='mt-16 text-4xl font-extrabold'>OUR STORY</h2>
          <p className='font-medium mt-7'>Introducing <span className='text-[#560D80] font-bold'>Hoot Society</span> - your dynamic event powerhouse in Northeast India.</p>
          <p className='font-medium mt-7'>Driven by youth and fueled by determination, our team is dedicated to
            curating top-tier events for diverse audiences. With strong PR and networking skills, we&apos;re on a mission to revolutionize Meghalaya&apos;s nightlife scene, blending entertainment, music, and culture to create unforgettable experiences.</p>
          <p className='font-medium mt-7'>Join us as we push boundaries and redefine event standards in Northeast India. Experience the magic of Hoot Society and let us elevate your events to new heights</p>
          <p className='font-medium mt-24'>Introducing <span className='text-[#560D80] font-bold'>&quot;Mix N Match&quot;</span> - an innovative event IP poised to revolutionize Meghalaya&apos;s nightlife scene with a vibrant fusion of Hip-Hop, R&B, and Afrobeats music. Prepare to be immersed in an unparalleled audiovisual journey.
          </p>
          <p className='font-medium mt-7'>At the heart of our mission is bridging the gap between local talent and national luminaries. We strive to spotlight the rich pool of talent within Meghalaya while also featuring renowned artists from across the nation.
          </p>
          <p className='font-medium mt-7 mb-16'>Through collaboration and a
            dedicated platform, &quot;Mix N Match&quot; serves as a catalyst for artistic advancement and cultural exchange.
            With a steadfast commitment to excellence, every facet of the
            event is meticulously curated to ensure an unforgettable experience for all attendees.</p>
            <Button link="https://events.onlybees.in/" />
        </div>

      </div>
      <Footer />
    </>
  );
}

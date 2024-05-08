"use client";
import React, { useState, useEffect } from 'react';

import "./EventDetails.css";

import flyer from "../../../public/mix-sis.png"


import Image from "next/image";


const EventDetails = () => {

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    useEffect(() => {
        const Script = document.createElement("script");
        //id should be same as given to form element
        const Form = document.getElementById("paymentForm");
        Script.setAttribute(
            "src",
            "https://checkout.razorpay.com/v1/payment-button.js"
        );
        Script.setAttribute("data-payment_button_id", "pl_O6Q1NXwqKfEjzx");
        if (Form) {
            Form.appendChild(Script);
        }
    }, [mounted]);


    const [windowWidth, setWindowWidth] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
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
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [windowWidth]);




    return (
        <div className="event-container">
            <div className="my-16 flex lg:flex-row flex-col-reverse gap-6">

                {/* LEFT */}
                <div className="flex flex-col left gap-6">

                    <div className="p-0 leading-8">
                        <h2 className="lg:ml-0 ml-3 lg:text-right text-left text-5xl font-bold mb-2">Mix&#39;sis</h2>
                        <p className="lg:ml-0 ml-3 lg:text-right text-left font-light">The Yeastern Civilization</p>
                        {<h3 className="lg:ml-0 ml-3 lg:text-right text-left text-xl text-[#00FF38]">Fri, May 31, 9:00 PM <span className="font-light text-sm">{isMobile ? <br /> : ""}GMT +5:30</span></h3>}
                        <div className="lg:ml-0 ml-3 flex lg:gap-16 gap-10 lg:justify-end">
                            {/* <p>Tag</p> */}
                            <p>Shillong</p>
                        </div>
                    </div>

                    <div className="scroll-about-text">
                        <h3 className="lg:text-right ml-2 text-xl font-bold leading-10">About</h3>
                        <div className="overflow-scroll about-text p-4 rounded-2xl">
                            <p className="lg:text-right leading-7">&#34;The Mix&#39;sis&#34; is not just an event; it&#39;s a celebration of diversity, talent, and inclusivity in the realm of music. With an all-female DJ lineup, it&#39;s a platform where women can shine, showcasing their unique styles and favorite genres, from pulsating techno beats to soulful house melodies. Each DJ brings her own flair, creating an electrifying atmosphere that captivates the audience and keeps them moving all night long.</p>
                            <br />
                            <p className="lg:text-right leading-7">But &#34;The Mix&#39;sis&#34; is more than just music; it&#39;s a sanctuary, a safe space where everyone can freely express themselves without fear of judgment. It&#39;s a community where differences are celebrated, and individuality is embraced. Here, people can be their true selves, surrounded by the empowering sounds of talented female DJs who inspire and uplift with every track they drop.</p>
                            <br />
                            <p className="lg:text-right leading-7">As the music fills the air and the crowd pulses with energy, &#34;The Mix&#39;sis&#34; transcends beyond just an event; it becomes a movement, a beacon of empowerment and unity. Through the power of music, it fosters connections, breaks down barriers, and reminds us all of the strength found in diversity. So come join the celebration, dance to the beat of your own drum, and experience the magic of &#34;The Mix&#39;sis&#34;.</p>






                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col right gap-6">

                    <div className="flyer aspect-w-1 aspect-h-1">
                        <Image
                            src={flyer}
                            priority
                            width={900}
                            height="auto"
                            alt="Event Flyer"
                        />
                    </div>

                    <div className="btn-container flex lg:flex-row flex-col p-7 lg:gap-10 gap-4 bg-[#1e1e1e] justify-center rounded-3xl">
                        <div className="leading-0 price">
                            <p className="font-semibold lg:text-[0.6rem] text-[0.8rem] lg:ml-0">STARTING</p>
                            <p className="font-semibold lg:text-4xl text-6xl">&#8377;500</p>
                        </div>
                        <div className='bg-[#00FF38] pt-2 pb-0 px-2 rounded-full btn-inner-container'>
                            {mounted ? <form id="paymentForm"></form> : <p className='text-center font-bold py-3 px-6 text-black'>loading....</p>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EventDetails
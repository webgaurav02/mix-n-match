"use client";
import React, { useState, useEffect } from 'react';

import "./EventDetails.css";

import flyer from "../../../public/alchemy.jpeg"
import location from "../../../public/location-dot-solid.svg"

import Image from "next/image";


const EventDetails = () => {

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    useEffect(() => {
        const Script1 = document.createElement("script");
        const Form1 = document.getElementById("paymentForm1");
        Script1.setAttribute(
            "src",
            "https://checkout.razorpay.com/v1/payment-button.js"
        );
        Script1.setAttribute("data-payment_button_id", "pl_O80hfaXlM61Efb");
        if (Form1) {
            Form1.appendChild(Script1);
        }

        const Script2 = document.createElement("script");
        const Form2 = document.getElementById("paymentForm2");
        Script2.setAttribute(
            "src",
            "https://checkout.razorpay.com/v1/payment-button.js"
        );
        Script2.setAttribute("data-payment_button_id", "pl_O80xP9cd08CDjI");
        if (Form2) {
            Form2.appendChild(Script2);
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
                        <p className="lg:ml-0 ml-3 lg:text-right text-left font-light">Jameson Connect x Pure Feat.</p>
                        <h2 className="lg:ml-0 ml-3 lg:text-right text-left text-5xl font-bold mb-2">ZOKHUMA by Alchemy</h2>
                        <div className='lg:ml-0 ml-3 flex flex-row lg:justify-end gap-2'>
                            <Image
                                src={location}
                                priority
                                width={10}
                                height="auto"
                                alt="Event Flyer"
                            />
                            <p className="lg:ml-0 lg:text-right text-left font-light">NYX LOUNGE & DECK</p>
                        </div>
                        {<h3 className="lg:ml-0 ml-3 lg:text-right text-left text-xl text-[#00FF38]">Sat, May 11, 8:00 PM <span className="font-light text-sm">{isMobile ? <br /> : ""}GMT +5:30</span></h3>}
                        <div className="lg:ml-0 ml-3 flex lg:gap-16 gap-10 lg:justify-end">
                            {/* <p>Tag</p> */}
                            <p>Guwahati</p>
                        </div>
                    </div>

                    <div className="scroll-about-text">
                        <h3 className="lg:text-right ml-2 text-xl font-bold leading-10">About</h3>
                        <div className="overflow-scroll about-text p-4 rounded-2xl">
                            <p className="lg:text-right leading-7">
                                Step into the realm of sonic euphoria at Jameson Connects x Pure! Brace yourself for an electrifying fusion of music, vibes, and pure energy that promises to leave you spellbound.</p>
                            <br />
                            <p className="lg:text-right leading-7">Featuring the sensational DJ Zokhuma and the incredible Kangkan Nath, this event is a showcase of talent and passion, igniting the night with pulsating rhythms and infectious energy.
                            </p>
                            <br />
                            <p className="lg:text-right leading-7">Mark your calendars for a date with transcendental beats and an atmosphere charged with excitement. RSVP now to ensure you don&apos;t miss out on this unforgettable experience.</p>






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

                    <div className="btn-container flex lg:flex-col flex-col lg:py-4 p-7 lg:gap-3 gap-4 bg-[#1e1e1e] justify-center rounded-3xl">
                        <div className="leading-0 price w-full">
                            <p className="font-semibold lg:text-[0.6rem] text-[0.8rem] lg:ml-0">STARTING</p>
                            <p className="font-semibold lg:text-6xl text-6xl">&#8377;500</p>
                        </div>
                        <div className="w-full px-0 mx-0 py-0">
                            <p className='mb-2 font-semibold lg:text-[0.9rem] text-[1.2rem] ml-3'>PHASE 1</p>
                            <div className='mb-5 bg-[#00FF38] pt-2 pb-0 px-2 rounded-full btn-inner-container'>
                                {mounted ? <form id="paymentForm1"></form> : <p className='text-center font-bold py-3 px-6 text-black'>loading....</p>}
                            </div>
                            <p className='mb-2 font-semibold lg:text-[0.9rem] text-[1.2rem] ml-3'>PHASE 2</p>
                            <div className=' bg-[#00FF38] pt-2 pb-0 px-2 rounded-full btn-inner-container'>
                                {mounted ? <form id="paymentForm2"></form> : <p className='text-center font-bold py-3 px-6 text-black'>loading....</p>}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EventDetails
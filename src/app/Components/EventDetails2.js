"use client";
import React, { useState, useEffect } from 'react';

import "./EventDetails.css";

import flyer from "../../../public/c1.png"
import c2 from "../../../public/c2.jpeg"
import c3 from "../../../public/c3.jpeg"
import c4 from "../../../public/c4.jpeg"

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
        Script.setAttribute("data-payment_button_id", "pl_O3a6uBaN00nzcJ");
        if (Form) {
            Form.appendChild(Script);
        }
    }, [mounted]);

    // <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_O3a6uBaN00nzcJ" async> </script> </form>


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
                        <h2 className="lg:ml-0 ml-3 lg:text-right text-left text-5xl font-bold mb-2">Kilometre Zero</h2>
                        <p className="lg:ml-0 ml-3 lg:text-right text-left font-light">Linsamer Farms</p>
                        {<h3 className="lg:ml-0 ml-3 lg:text-right text-left text-xl text-[#00FF38]">Sat, May 11 <span className="font-light text-sm">{isMobile ? <br /> : ""}2024</span></h3>}
                        <div className="lg:ml-0 ml-3 flex lg:gap-16 gap-10 lg:justify-end">
                            {/* <p>Tag</p> */}
                            <p>Kyrdemkulai, Ri Bhoi</p>
                        </div>
                    </div>

                    <div className="scroll-about-text">
                        <h3 className="lg:text-right ml-2 text-xl font-bold leading-10">About</h3>
                        <div className="overflow-scroll about-text p-4 rounded-2xl">
                            <p className="lg:text-right leading-7 mb-5">
                                Welcome to an extraordinary art collaborative event where artistry meetssustainability, where culinary creation intertwines with personal growth, and where the journey towards self-discovery is as transformative as it is immersive. This art collaborative event will transcend under the captivating theme of “Kilometre Zero”.</p>
                            <p className="lg:text-right leading-7 mb-5">
                                In this unique endeavour, we embrace the ethos of the kilometre zero movement, advocating for responsible sourcing and minimal intermediaries to reduce our carbon footprint. Our mission is to craft an unparalleled experience that celebrates the connection between nature and creativity, inviting participants to embark on a voyage of inner exploration and cultural appreciation.</p>
                            <p className="lg:text-right leading-7 mb-5">Through culinary mastery inspired by the stories of local ingredients, artistic self expression, and the power of storytelling through food and art, we aim to foster holistic well-being and personal transformation. Join us in this adventure, where every moment becomes a canvas for innovation, connection, and boundless inspiration.</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col right gap-6">

                    <div className="flyer aspect-w-1 aspect-h-1">
                        <Image
                            src={flyer}
                            loading='lazy'
                            width={900}
                            height="auto"
                            alt="Event Flyer"
                        />
                    </div>

                    <div className="btn-container flex lg:flex-row flex-col p-7 lg:gap-10 gap-4 bg-[#1e1e1e] justify-center rounded-3xl">
                        <div className="leading-0 price">
                            <p className="font-semibold lg:text-[0.6rem] text-[0.8rem] lg:ml-0">STARTING</p>
                            <p className="font-semibold lg:text-4xl text-6xl">&#8377;1800</p>
                        </div>
                        <div className='bg-[#00FF38] pt-2 pb-0 px-2 rounded-full btn-inner-container'>
                            {mounted ? <form id="paymentForm"></form> : <p className='text-center font-bold py-3 px-6 text-black'>loading....</p>}
                        </div>
                    </div>

                </div>
            </div>
            <Image
                src={c2}
                loading='lazy'
                width={900}
                height="auto"
                alt="Event Flyer"
            />
            <Image
                src={c3}
                loading='lazy'
                width={900}
                height="auto"
                alt="Event Flyer"
            />
            <Image
                src={c4}
                loading='lazy'
                width={900}
                height="auto"
                alt="Event Flyer"
                className='mb-16'
            />
        </div>
    )
}

export default EventDetails
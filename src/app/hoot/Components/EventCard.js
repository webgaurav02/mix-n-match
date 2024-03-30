import React, { useState, useEffect } from 'react';

const EventCard = (props) => {

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
        Script.setAttribute("data-payment_button_id", "pl_Nrt2TGD923RDhP");
        if (Form) {
            Form.appendChild(Script);
        }
    }, [mounted]);


    return (
        <>
            <div className={`${!props.isMobile?"sticky top-8":""} mt-16 lg:mt-0 text-left ${!props.isMobile?"event-details-desktop":"event-details"} py-10 px-10`}>
                <h1 className='text-3xl lg:text-5xl text-[#560D80] font-black mb-5'>Mix N Match</h1>
                <p className=' font-bold'>Featuring</p>
                <p className=' text-[#560D80] font-bold text-2xl'>BRAINWASH</p>
                <p className=' text-[#560D80] font-bold text-2xl'>AEDRIAN</p>
                <p className=' text-[#560D80] font-bold text-2xl mb-10'>QUILLS</p>

                <p className=' font-medium text-sm'>Date: <span className='text-[#560D80] font-bold'>6th April</span></p>
                <p className=' font-medium text-sm'>Venue : <span className='text-[#560D80] font-bold'>THE YEASTERN CIVILIZATION</span></p>
                <p className=' mb-14 font-bold text-sm'>9 P.M onwards </p>
                {mounted ? <form id="paymentForm"></form> : <p className='text-center text-[#560D80] font-bold'>loading....</p>}
            </div>
        </>
    )
}

export default EventCard
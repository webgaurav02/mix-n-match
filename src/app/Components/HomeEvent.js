import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const HomeEvent = (props) => {
    return (
        <Link
            href={`/${props.route}`}
            passHref
        >
            <div className=' w-48 h-auto px-0'>
                <Image
                    // priority
                    src={props.image}
                    loading="lazy"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-full w-full object-cover"
                    alt="Event Flyer"
                    style={{"boxShadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", "borderRadius": "8px"}}
                />
                <div className=' pl-2 text-left mt-2 font-medium font-blogger text-xl lg:text-2xl lg:leading-snug '>{props.title}</div>
                <div className=' pl-2 text-left font-medium font-blogger opacity-70 text-[#3f362b] text-sm lg:text-sm lg:leading-snug '>{props.date}</div>
                <div className=' pl-2 text-left font-medium font-blogger opacity-70 text-[#3f362b] text-sm lg:text-sm lg:leading-snug '>{props.venue}</div>
                <div className=' pl-2 text-left font-medium font-blogger opacity-70 text-[#3f362b] text-sm lg:text-sm lg:leading-snug '>{props.price}</div>
            </div>
        </Link>
    )
}

export default HomeEvent
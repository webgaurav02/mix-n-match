import './Footer.css';
import logo from "../../public/OnlyBees_logo.svg"
import Image from 'next/image';
import Link from 'next/link';

// social logos
import facebook from "../../public/Facebook_black.svg"
import instagram from "../../public/Instagram_black.svg"
import linkedIn from "../../public/LinkedIN_black.svg"
// import whatsapp from "../../public/Whatsapp_black.svg"


const Footer = () => {
    return (
        <div className='mx-5 lg:mx-10 pb-5'>
            <div className='foot flex flex-col lg:flex-row lg:gap-40 lg:px-28'>
                <Image
                    src={logo}
                    width={500}
                    height="auto"
                    alt='OnlyBees logo'
                    className='lg:ml-28 foot-logo'
                />
                <div className='footer-links flex flex-row lg:gap-40 gap-16 lg:mt-20'>
                    <div className='Onlybees flex flex-col gap-5'>
                        <div className='font-semibold text-xl'>Onlybees.</div>
                        <Link className='text-xs font-medium' href="https://events.onlybees.in/" rel="noopener noreferrer" target="_blank">About</Link>
                        <Link className='text-xs font-medium' href="https://events.onlybees.in/" rel="noopener noreferrer" target="_blank">Career</Link>
                        <Link className='text-xs font-medium' href="https://events.onlybees.in/" rel="noopener noreferrer" target="_blank">Press</Link>
                    </div>
                    <div className='Support flex flex-col gap-5'>
                        <div className='font-semibold text-xl'>Support</div>
                        <Link className='text-xs font-medium' href="https://events.onlybees.in/" rel="noopener noreferrer" target="_blank">Contact us</Link>
                        <Link className='text-xs font-medium' href="https://events.onlybees.in/" rel="noopener noreferrer" target="_blank">Refund</Link>
                    </div>
                </div>
            </div>
            <div className='copyright flex flex-col gap-5 lg:gap-0 lg:flex-row lg:justify-between py-3 text-center'>
                <p className=''>&copy; Onlybees</p>
                <div className='flex flex-col-reverse lg:flex-row lg:gap-16 gap-5'>
                    <div className='flex lg:gap-10 align-middle justify-center gap-10 px-5 lg:px-0'>
                        <Link className='text-xs font-medium pt-1' href="https://events.onlybees.in/" rel="noopener noreferrer" target="_blank">Privacy</Link>
                        <Link className='text-xs font-medium pt-1' href="https://events.onlybees.in/" rel="noopener noreferrer" target="_blank">Terms of use</Link>
                        <Link className='text-xs font-medium pt-1' href="https://events.onlybees.in/" rel="noopener noreferrer" target="_blank">Cookies Settings</Link>
                    </div>
                    <div className='flex lg:justify-start justify-center lg:gap-4 gap-5'>
                        <Link href="https://events.onlybees.in/" rel="noopener noreferrer" target="_blank">
                            <Image 
                                src={facebook}
                                width={25}
                                height="auto"
                                alt='social logo'
                                className='socials'
                            />
                        </Link>
                        <Link href="https://www.instagram.com/onlybees.in/" rel="noopener noreferrer" target="_blank">
                            <Image 
                                src={instagram}
                                width={25}
                                height="auto"
                                alt='social logo'
                                className='socials'
                            />
                        </Link>
                        <Link href="https://www.linkedin.com/company/onlybees/" rel="noopener noreferrer" target="_blank">
                            <Image 
                                src={linkedIn}
                                width={25}
                                height="auto"
                                alt='social logo'
                                className='socials'
                            />
                        </Link>
                        {/* <Link href="https://wa.me/918787740538?text=Hi%20Onlybees!" rel="noopener noreferrer" target="_blank">
                            <Image 
                                src={whatsapp}
                                width={25}
                                height="auto"
                                alt='social logo'
                                className='socials'
                            />
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
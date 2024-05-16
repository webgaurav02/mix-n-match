// import "./Navbar.css";
import Link from "next/link";
import dark from "../../../public/OnlyBees_dark.svg";
import light from "../../../public/OnlyBees_light.svg";
import Image from "next/image"

const Navbar = (props) => {
    return (
        <div className={`nav border-b border-solid ${props.mode=="dark"?"border-white bg-black":"border-black bg-white"} lg:mx-10 py-7 mx-5`}>
            <Link href="/" passHref>
                <Image
                    src={(props.mode=="dark")?light:dark}
                    width={180}
                    height="auto"
                    alt="OnlyBees logo"
                />
            </Link>
        </div>
    )
}

export default Navbar;
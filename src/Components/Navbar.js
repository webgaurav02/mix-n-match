import "./Navbar.css";
import logo from "../../public/OnlyBees_logo.svg"
import Image from "next/image"

const Navbar = () => {
    return (
        <div className="nav lg:mx-10 py-7 mx-5">
            <Image
                src={logo}
                width={150}
                height="auto"
                alt="OnlyBees logo"
            />
        </div>
    )
}

export default Navbar
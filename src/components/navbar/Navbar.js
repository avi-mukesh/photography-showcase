import React from "react"
import Navlink from "./Navlink"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <Navlink title="Home" to="/" />
                </li>
                <li>
                    <Navlink title="Gallery" to="/gallery" />
                </li>
                <li>
                    <Navlink title="Contact" to="/contact" />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

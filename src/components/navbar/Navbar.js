import React from "react"
import Navlink from "./Navlink"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <Navlink title="Home" to="/" />
                <Navlink title="Gallery" to="/gallery" />
                <Navlink title="Contact" to="/contact" />
            </ul>
        </nav>
    )
}

export default Navbar

import React from "react"
import { Link } from "react-router-dom"

const Navlink = ({ title, to }) => {
    return (
        <li className="nav-link">
            <Link to={to}>{title}</Link>
        </li>
    )
}

export default Navlink

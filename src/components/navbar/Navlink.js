import React from "react"
import { Link } from "react-router-dom"

const Navlink = ({ title, to }) => {
    return <Link to={to}>{title}</Link>
}

export default Navlink

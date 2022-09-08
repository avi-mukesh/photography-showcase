import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Navlink = ({ title, to }) => {
    const [active, setActive] = useState(false)
    const { pathname } = useLocation()
    useEffect(() => {
        if (pathname === to) {
            setActive(true)
        } else {
            setActive(false)
        }
    })

    return (
        <li
            className={`nav-link${active ? " nav-link-active" : ""}`}
            title={title}
        >
            <Link to={to}>{title}</Link>
        </li>
    )
}

export default Navlink

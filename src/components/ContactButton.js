import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactButton = ({ brand }) => {
    return (
        <Link to="/">
            <FontAwesomeIcon icon={["fab", brand]}></FontAwesomeIcon>
        </Link>
    )
}

export default ContactButton

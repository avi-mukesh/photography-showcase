import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactButton = ({ brand, link }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={["fab", brand]}></FontAwesomeIcon>
        </a>
    )
}

export default ContactButton

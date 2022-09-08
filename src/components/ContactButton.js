import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactButton = ({ brand, link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            title={brand[0].toUpperCase() + brand.slice(1)}
        >
            <FontAwesomeIcon icon={["fab", brand]}></FontAwesomeIcon>
        </a>
    )
}

export default ContactButton

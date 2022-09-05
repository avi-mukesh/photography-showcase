import React from "react"

const ContactDetail = ({ title, value }) => {
    return (
        <div className="contact-detail">
            <p>{title}</p>
            <p>{value}</p>
        </div>
    )
}

export default ContactDetail

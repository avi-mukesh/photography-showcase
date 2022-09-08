import React from "react"

const ContactDetail = ({ title, value }) => {
    return (
        <div className="contact-detail">
            <h2>{title}</h2>
            <p>{value}</p>
        </div>
    )
}

export default ContactDetail

import React from "react"

const ContactDetail = ({ title, value }) => {
    return (
        <div className="contact-detail">
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    )
}

export default ContactDetail

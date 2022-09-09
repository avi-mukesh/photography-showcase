import React from "react"

const ContactDetail = ({ title, value, action }) => {
    return (
        <div className="contact-detail">
            <h2>{title}</h2>
            <p>
                <a href={`${action}:${value}`}>{value}</a>
            </p>
        </div>
    )
}

export default ContactDetail

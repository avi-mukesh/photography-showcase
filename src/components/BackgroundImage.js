import React from "react"

const BackgroundImage = ({ bgSource }) => {
    return (
        <div
            className="background-image"
            style={{ backgroundImage: `url(${bgSource})` }}
        ></div>
    )
}

export default BackgroundImage

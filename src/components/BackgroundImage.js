import React, { useState } from "react"

const BackgroundImage = ({ bgSource, index }) => {
    const [big, setBig] = useState(false)

    return (
        <div
            onMouseEnter={() => setBig(true)}
            onMouseLeave={() => setBig(false)}
            className="background-image"
            style={{
                backgroundImage: `url(${bgSource})`,
                flexGrow: big ? 3 : 1,
            }}
        ></div>
    )
}

export default BackgroundImage

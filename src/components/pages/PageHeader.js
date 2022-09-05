import React from "react"

const PageHeader = ({ title, positionMiddle }) => {
    return (
        <header
            className="header pageHeader"
            style={positionMiddle ? MIDDLE : {}}
        >
            <h1>{title}</h1>
        </header>
    )
}

const MIDDLE = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
}
export default PageHeader

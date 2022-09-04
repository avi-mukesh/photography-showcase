import React, { useState, useEffect } from "react"

const Background = ({ children }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <div
            id="background"
            style={{
                gap: loading ? "25%" : "0%",
            }}
        >
            {children}
        </div>
    )
}

export default Background

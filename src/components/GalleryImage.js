import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const GalleryImage = ({ image, id }) => {
    const navigate = useNavigate()
    const [clicked, setClicked] = useState(false)

    const [overlay, setOverlay] = useState(false)

    const handleOnClick = () => {
        setClicked(true)
        // just so you can see the image expand a bit
        setTimeout(() => navigate(`/gallery/${id}`, { replace: false }), 70)
    }

    return (
        <div
            className="gallery-image-container"
            style={{ opacity: overlay ? 0.9 : 1 }}
        >
            <img
                onMouseEnter={() => setOverlay(true)}
                onMouseLeave={() => setOverlay(false)}
                onClick={handleOnClick}
                src={image.src}
                alt={image.alt}
                style={{ transform: clicked ? "scale(1.2)" : "scale(1)" }}
            />
        </div>
    )
}

export default GalleryImage

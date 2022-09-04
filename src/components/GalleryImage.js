import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const GalleryImage = ({ image, id }) => {
    const navigate = useNavigate()

    const [overlay, setOverlay] = useState(false)

    return (
        <div
            className="gallery-image-container"
            style={{ opacity: overlay ? 0.9 : 1 }}
        >
            <img
                onMouseEnter={() => setOverlay(true)}
                onMouseLeave={() => setOverlay(false)}
                onClick={() => navigate(`/gallery/${id}`, { replace: false })}
                src={image.src}
                alt={image.alt}
            />
        </div>
    )
}

export default GalleryImage

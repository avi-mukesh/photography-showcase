import React from "react"
import { useParams } from "react-router-dom"
import { galleryImages } from "../../Images"
import ImageHeader from "./ImageHeader"
import ImageMapInfo from "../ImageMapInfo"

const ImageInfoPage = () => {
    const params = useParams()

    const image = galleryImages[params.id]
    console.log(image)

    return (
        <main className="content image-info-page">
            <div className="image-container">
                <img src={image.src} alt={image.alt} />
            </div>
            <div class="image-info">
                <ImageHeader title="Title" />
                <h2>Story behind the image</h2>
                <h2>Location: Cornwall</h2>
                <h2>Date: 01/01/2000</h2>

                <ImageMapInfo />
            </div>
        </main>
    )
}

export default ImageInfoPage

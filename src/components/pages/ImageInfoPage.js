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
            <div className="side image-info">
                <ImageHeader title="Title" />
                <h3>Story behind the image</h3>
                <h3>Location: India</h3>
                <h3>Date: 01/01/2000</h3>

                <ImageMapInfo />
            </div>
        </main>
    )
}

export default ImageInfoPage

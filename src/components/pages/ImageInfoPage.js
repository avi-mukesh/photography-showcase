import React from "react"
import { useParams } from "react-router-dom"
import { galleryImages } from "../../Images"
import SideHeader from "./SideHeader"
import ImageMapInfo from "../ImageMapInfo"

const ImageInfoPage = () => {
    const params = useParams()

    const image = galleryImages[params.id]

    return (
        <main className="content image-info-page">
            <div className="image-container">
                <img src={image.src} alt={image.alt} />
            </div>
            <div className="side image-info">
                <SideHeader title={image.title} />
                <section className="info">
                    <h3>Story behind the image</h3>
                    <p>{image.story}</p>
                </section>
                <ImageMapInfo location={image.location} />
            </div>
        </main>
    )
}

export default ImageInfoPage

import React from "react"
import PageHeader from "./PageHeader"

import { galleryImages } from "../../Images"
import GalleryImage from "../GalleryImage"

const GalleryPage = () => {
    return (
        <>
            <PageHeader title="Gallery" positionMiddle={false} />
            <main
                className="content"
                id="gallery"
            >
                {galleryImages.map((image, i) => (
                    <GalleryImage image={image} key={i} id={i} />
                ))}
            </main>
        </>
    )
}

export default GalleryPage

import React from "react"

import PageHeader from "../headers/PageHeader"
import GalleryImage from "../GalleryImage"

import useImages from "../../hooks/useImages"

const GalleryPage = () => {
    const images = useImages()

    return (
        <>
            <PageHeader title="Gallery" />
            <main className="content" id="gallery">
                {images.map((image, i) => (
                    <GalleryImage image={image} key={i} id={i} />
                ))}
            </main>
        </>
    )
}

export default GalleryPage

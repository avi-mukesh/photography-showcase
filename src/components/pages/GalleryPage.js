import React, { useEffect, useState } from "react"
import PageHeader from "./PageHeader"

import { galleryImages } from "../../Images"
import GalleryImage from "../GalleryImage"

const GalleryPage = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => setLoading(false), [])

    return (
        <>
            <PageHeader title="Gallery" positionMiddle={false} />
            <main
                className="content"
                id="gallery"
                style={{ gap: loading ? "100px" : "0px" }}
            >
                {galleryImages.map((image, i) => (
                    <GalleryImage image={image} key={i} id={i} />
                ))}
            </main>
        </>
    )
}

export default GalleryPage

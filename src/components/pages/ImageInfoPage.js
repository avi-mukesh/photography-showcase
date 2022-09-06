import React from "react"
import { FullScreen, useFullScreenHandle } from "react-full-screen"

import { useParams } from "react-router-dom"

import SideHeader from "./SideHeader"
import ImageMapInfo from "../ImageMapInfo"

import useImages from "../../hooks/useImages"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ImageInfoPage = () => {
    const params = useParams()
    const images = useImages()
    const handle = useFullScreenHandle()

    const image = images[params.id]

    return (
        <main className="content image-info-page">
            <div className="image-container">
                <FullScreen handle={handle}>
                    <img src={image.src} alt={image.alt} />
                    {handle.active ? (
                        <button
                            className="btn-fullscreen-control"
                            onClick={handle.exit}
                        >
                            <FontAwesomeIcon icon="window-close"></FontAwesomeIcon>
                        </button>
                    ) : (
                        <button
                            className="btn-fullscreen-control"
                            onClick={handle.enter}
                        >
                            <FontAwesomeIcon icon="expand"></FontAwesomeIcon>
                        </button>
                    )}
                </FullScreen>
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

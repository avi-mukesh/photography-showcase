import React from "react"
import { FullScreen, useFullScreenHandle } from "react-full-screen"

import { useParams } from "react-router-dom"

import SideHeader from "../headers/SideHeader"
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
                            title="Exit fullscreen"
                        >
                            <FontAwesomeIcon icon="window-close"></FontAwesomeIcon>
                        </button>
                    ) : (
                        <button
                            className="btn-fullscreen-control"
                            onClick={handle.enter}
                            title="Fullscreen"
                        >
                            <FontAwesomeIcon icon="expand"></FontAwesomeIcon>
                        </button>
                    )}
                </FullScreen>
            </div>
            <div className="side image-info">
                <SideHeader title={image.title} />
                <div className="info">
                    <h2>Story behind the image</h2>
                    <p>{image.story}</p>
                </div>
                <ImageMapInfo location={image.location} />
            </div>
        </main>
    )
}

export default ImageInfoPage

// components
import React from "react"
import useImages from "../../hooks/useImages"

import Background from "../Background"
import BackgroundImage from "../BackgroundImage"
import PageHeader from "./PageHeader"

const LandingPage = () => {
    const images = useImages()
    const bgImages = images.slice(0, 4)
    return (
        <>
            <PageHeader title="AVI PHOTO" positionMiddle={true} />

            <Background>
                {bgImages.map((image, i) => (
                    <BackgroundImage bgSource={image.src} key={i} index={i} />
                ))}
            </Background>
        </>
    )
}

export default LandingPage

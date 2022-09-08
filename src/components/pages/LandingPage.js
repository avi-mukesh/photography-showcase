// components
import React from "react"
import useImages from "../../hooks/useImages"

import Background from "../Background"
import BackgroundImage from "../BackgroundImage"
import LandingPageHeader from "../headers/LandingPageHeader"

const LandingPage = () => {
    const images = useImages()
    const bgImages = images
        .map((img) => ({ img, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ img }) => img)
        .slice(0, 4)
    return (
        <>
            <LandingPageHeader title="AVI PHOTO" />

            <Background>
                {bgImages.map((image, i) => (
                    <BackgroundImage bgSource={image.src} key={i} index={i} />
                ))}
            </Background>
        </>
    )
}

export default LandingPage

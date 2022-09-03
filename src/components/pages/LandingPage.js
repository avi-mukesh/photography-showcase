// components
import React from "react"
import Background from "../Background"
import BackgroundImage from "../BackgroundImage"

import { bgImages } from "../../Images.js"
import LandingPageHeading from "../LandingPageHeader"

const LandingPage = () => {
    return (
        <>
            <Background>
                <LandingPageHeading />

                {bgImages.map((image, i) => (
                    <BackgroundImage bgSource={image.src} key={i} />
                ))}
            </Background>
        </>
    )
}

export default LandingPage

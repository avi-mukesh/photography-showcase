// components
import React, { useState } from "react"
import Background from "../Background"
import BackgroundImage from "../BackgroundImage"

import { bgImages } from "../../Images.js"
import PageHeader from "./PageHeader"

const LandingPage = () => {
    return (
        <>
            <PageHeader title="AVI PHOTO" positionMiddle={true} />

            <Background>
                {bgImages.map((image, i) => (
                    <BackgroundImage
                        bgSource={image.src}
                        key={i}
                        index={i}
                    />
                ))}
            </Background>
        </>
    )
}

export default LandingPage

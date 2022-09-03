// components
import Background from "../Background"
import BackgroundImage from "../BackgroundImage"

import { bgImages } from "../../Images.js"

const LandingPage = () => {
    return (
        <Background>
            {bgImages.map((image, i) => (
                <BackgroundImage bgSource={image.src} key={i} />
            ))}
        </Background>
    )
}

export default LandingPage

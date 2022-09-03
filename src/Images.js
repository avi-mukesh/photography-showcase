import image1 from "./images/web/01.webp"
import image2 from "./images/web/02.webp"
import image3 from "./images/web/03.webp"
import image4 from "./images/web/04.webp"

// const IMAGE_PATH = "./images/web"
class Image {
    constructor(src, location) {
        this.src = src
        this.location = location
    }
}

export const bgImages = [
    new Image(image1, "Somewhere"),
    new Image(image2, "Somewhere"),
    new Image(image3, "Somewhere"),
    new Image(image4, "Somewhere"),
]

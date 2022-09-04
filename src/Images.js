import image1 from "./images/web/01.webp"
import image2 from "./images/web/02.webp"
import image3 from "./images/web/03.webp"
import image4 from "./images/web/04.webp"

// const IMAGE_PATH = "./images/web"
class Image {
    constructor(src, alt, location) {
        this.src = src
        this.alt = alt
        this.location = location
    }
}

export const bgImages = [
    new Image(image1, "alt text", "Somewhere"),
    new Image(image2, "alt text", "Somewhere"),
    new Image(image3, "alt text", "Somewhere"),
    new Image(image4, "alt text", "Somewhere"),
]

export const galleryImages = [
    new Image(image1, "alt text", "Somewhere"),
    new Image(image2, "alt text", "Somewhere"),
    new Image(image3, "alt text", "Somewhere"),
    new Image(image4, "alt text", "Somewhere"),
    new Image(image1, "alt text", "Somewhere"),
    new Image(image2, "alt text", "Somewhere"),
    new Image(image3, "alt text", "Somewhere"),
    new Image(image4, "alt text", "Somewhere"),
]

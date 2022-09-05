import { ImageContext } from "../contexts/ImageContext"
import { useContext } from "react"

const useImages = () => {
    const images = useContext(ImageContext)
    return images
}

export default useImages

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"

import Layout from "./components/pages/Layout"
import LandingPage from "./components/pages/LandingPage"
import GalleryPage from "./components/pages/GalleryPage"
import ImageInfoPage from "./components/pages/ImageInfoPage"
import ContactPage from "./components/pages/ContactPage"

import { images } from "./Images"
import { ImageContext } from "./contexts/ImageContext"

const App = () => {
    return (
        <ImageContext.Provider value={images}>
            <Router>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/gallery">
                            <Route index element={<GalleryPage />} />
                            <Route
                                path="/gallery/:id"
                                element={<ImageInfoPage />}
                            />
                        </Route>

                        <Route path="/contact" element={<ContactPage />} />
                    </Route>
                </Routes>
            </Router>
        </ImageContext.Provider>
    )
}

export default App

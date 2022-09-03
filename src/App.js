import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"

import Layout from "./components/pages/Layout"
import LandingPage from "./components/pages/LandingPage"
import GalleryPage from "./components/pages/GalleryPage"
import ContactPage from "./components/pages/ContactPage"

const App = () => {
    // const handleMouseOver = (i) => {}

    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App

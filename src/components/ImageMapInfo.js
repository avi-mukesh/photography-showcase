import React, { useMemo } from "react"
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"

const ImageMapInfo = ({ location }) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    })

    const center = useMemo(() => location, [location])

    return (
        <>
            {isLoaded ? (
                <div className="map-container">
                    <GoogleMap
                        zoom={10}
                        center={center}
                        mapContainerStyle={{ width: "100%", height: "100%" }}
                    >
                        <MarkerF position={center} />
                    </GoogleMap>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}

export default ImageMapInfo

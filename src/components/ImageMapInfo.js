import React, { useMemo } from "react"
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"

const ImageMapInfo = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyD_1DmSW9bdOSk3Axma6asbryCJAV_2aTM",
    })

    const center = useMemo(() => ({ lat: 44, lng: -80 }), [])

    return (
        <>
            {isLoaded ? (
                <div className="map-container">
                    <GoogleMap
                        zoom={10}
                        center={center}
                        mapContainerStyle={{ width: "100%", height: "100%" }}
                    >
                        <MarkerF position={{ lat: 44, lng: -80 }} />
                    </GoogleMap>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}

export default ImageMapInfo

import { useState } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './GoogleMaps.css'

 const Maps = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY
    })

    const [activeMarker, setActiveMarker] = useState(null)
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker)
    }

    return (
        <div className="mapa-container">
            {isLoaded ? (
            <GoogleMap 
                center={{lat:-31.424569, lng: -64.209741}} 
                zoom={15} 
                options= {{streetViewControl: false, mapTypeControl: false}}
                onClick={() => setActiveMarker(null)}
                mapContainerStyle={{
                    width:"100%", 
                    height:"100%",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                }}
            >
                <Marker
                    key={1} 
                    position={{lat:-31.424569, lng: -64.209741}} 
                    onClick={() => handleActiveMarker(1)}
                >
                    {activeMarker === 1 ? (
                    <InfoWindow onCloseClick={()=> setActiveMarker(null)}>
                        <div>
                            <p>Neumáticos usados Córdoba. </p>
                            <p>Negro 1228 esquina Perú.</p>
                            <a href="https://www.google.com/maps/place/Neum%C3%A1ticos+Usados+C%C3%B3rdoba/@-31.4246001,-64.2108224,16.75z/data=!4m6!3m5!1s0x9432a270e092fcd5:0xc454e712fb048fe!8m2!3d-31.4246224!4d-64.209718!16s%2Fg%2F11bw478jhg?entry=ttu" target="_blank" rel="noopener noreferrer">Ver en el mapa</a>
                        </div>
                    </InfoWindow>) : null
                    }
                </Marker>
            </GoogleMap>
            ) : null}
        </div>
        )
    }

export default Maps
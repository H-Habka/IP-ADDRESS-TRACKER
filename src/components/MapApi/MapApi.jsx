import React from 'react'
import './MapApi.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'





const MapApi = () => {

    const position = [51.505, -0.09]
    return (
        <>
            {/* <MapContainer className ='map' center={position} zoom={13} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer> */}
        </>
    )
}

export default MapApi
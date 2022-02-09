import { memo, FC, useState } from "react";

import { StyledMap } from "./style";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';

interface MapProps {
    lat: string
    lng: string
}

const grenIcon:any = L.icon({
    iconUrl: "marker-icon.png",
    iconSize: [30, 40], 
});

const NoSSRMap : FC<MapProps> = ({ lat, lng }) => {
    const [location] = useState({
        lat: lat ? parseInt(lat, 10) : -15.785151152895645,
        lng: lng ? parseInt(lng, 10) : -47.90958191756412
    });

    return (
        <StyledMap>
            <MapContainer center={[location.lat, location.lng]} zoom={14} scrollWheelZoom={true} className="map-container">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[location.lat, location.lng]} icon={grenIcon}>
                    <Popup>
                        PopUp
                    </Popup>
                </Marker>
            </MapContainer>
        </StyledMap>
    );
}

export default memo(NoSSRMap);
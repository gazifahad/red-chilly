import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup,useMapEvents} from 'react-leaflet';
import './Map.css'
import { render } from '@testing-library/react';

const Map = () => {
    const position = [0, -0.09];
    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
          click() {
            map.locate()
          },
          locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
          },
        })
        
        return position === null ? null : (
          <Marker position={position}>
            <Popup>You are here</Popup>
          </Marker>
        )
        
      }
      const containerStyle={
        width:'400px',
        height:'400px',
        border:'4px solid red'
      }
    
      const center=[23.851847109777257, 90.4328087894846];
      return (
       
        <MapContainer center={center} zoom={16} scrollWheelZoom={false} style={containerStyle}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
        
    );
};

export default Map;
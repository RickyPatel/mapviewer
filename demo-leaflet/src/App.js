import logo from './logo.svg';
import './App.css';
import osm from "./osm-providers";
import { useRef } from "react";
import React, { useState } from "react";
import L, { Icon } from 'leaflet';
import {EditControl} from 'react-leaflet-draw'
import "leaflet-draw/dist/leaflet.draw.css";
import { MapContainer,LayersControl, TileLayer, Marker, Popup, FeatureGroup,LayerGroup,Circle,Rectangle } from 'react-leaflet'

delete L.Icon.Default.prototype._getIconUrl;



function App() {
  
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
  });
  
  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();
  const _created = (e) => console.log(e);

  return (
    <div className="col">
        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
          <FeatureGroup>
            <EditControl
              position="topright"
              onCreated={_created}
              draw={
                {
                  /* rectangle: false,
                circle: false,
                circlemarker: false,
                marker: false,
                polyline: false, */
                }
              }
            />
          </FeatureGroup>
          <TileLayer
              url={osm.maptiler.url}
              attribution={osm.maptiler.attribution}
          />
          <Marker position={center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
    </div>  
    

    
  );
}

export default App;

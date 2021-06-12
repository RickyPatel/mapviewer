import logo from './logo.svg';
import './App.css';
import osm from "./osm-providers";
import { useRef } from "react";
import React, { useState } from "react";
import L, { divIcon, Icon } from 'leaflet';
import {EditControl} from 'react-leaflet-draw'
import "leaflet-draw/dist/leaflet.draw.css";
import { MapContainer,LayersControl, TileLayer, Marker, Popup, FeatureGroup,LayerGroup,Circle,Rectangle } from 'react-leaflet'

delete L.Icon.Default.prototype._getIconUrl;



function App() {
  
  // delete L.Icon.Default.prototype._getIconUrl;

  // L.Icon.Default.mergeOptions({
  //   iconRetinaUrl:
  //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  //   iconUrl:
  //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  //   shadowUrl:
  //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
  // });
  

  const OSMlayerURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const londonLatLng = [51.5, -0.09];

  const imageId = '23967341'
  const apiKey = 'd32b8e8c9fd053981366d517ad2a7cd99441d596ae32dc370bf5f694b6f7f8e5';
  const bandsFormula = 'b04,b03,b02';
  const imageTilesURL = `https://api.spectator.earth/imagery/${imageId}/tiles/{z}/{x}/{y}/?bands_formula=${bandsFormula}&api_key=${apiKey}`;

  const map = L.map('map').setView(londonLatLng, 13);

  L.tileLayer(OSMlayerURL).addTo(map);
  L.tileLayer(imageTilesURL).addTo(map);
  L.marker(londonLatLng).addTo(map).bindPopup('A pretty Sentinel-2 image.').openPopup();

  return(
    <div id="map"></div>
  );

  // const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  // const ZOOM_LEVEL = 9;
  // const mapRef = useRef();
  // const _created = (e) => console.log(e);

  // return (
  //   <div className="col">
  //       <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
  //         <FeatureGroup>
  //           <EditControl
  //             position="topright"
  //             onCreated={_created}
  //             draw={
  //               {
  //                 /* rectangle: false,
  //               circle: false,
  //               circlemarker: false,
  //               marker: false,
  //               polyline: false, */
  //               }
  //             }
  //           />
  //         </FeatureGroup>
  //         <TileLayer
  //             url={osm.maptiler.url}
  //             attribution={osm.maptiler.attribution}
  //         />
  //         <Marker position={center}>
  //           <Popup>
  //             A pretty CSS3 popup. <br /> Easily customizable.
  //           </Popup>
  //         </Marker>
  //       </MapContainer>
  //   </div>  
    

    
  // );
}

export default App;

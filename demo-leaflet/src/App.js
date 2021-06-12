import logo from './logo.svg';
import './App.css';
import osm from "./osm-providers";
import { useEffect, useRef } from "react";
import React, { useState } from "react";
import L, { divIcon, Icon } from 'leaflet';
import { EditControl } from 'react-leaflet-draw'
import { MapContainer, LayersControl, TileLayer, Marker, Popup, FeatureGroup, LayerGroup, Circle, Rectangle } from 'react-leaflet'
import "leaflet-draw/dist/leaflet.draw.css";

import Map from './Map';

const style = {
  width: "100%",
  height: "500px"
};

function App() {

  return (
    <Map />
  );




  //   const map = L.map('map').setView(londonLatLng, 13);




  //   return (




  //   );
}

export default App;

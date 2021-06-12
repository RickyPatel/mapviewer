import React, { useState, useEffect, useRef } from "react";
import L, { divIcon, Icon } from 'leaflet';
import osm from "./osm-providers";
import "leaflet-draw/dist/leaflet.draw.css";

import { EditControl } from 'react-leaflet-draw'
import { MapContainer, LayersControl, TileLayer, Marker, Popup, FeatureGroup, LayerGroup, Circle, Rectangle } from 'react-leaflet';


function Map() {

  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
  });

  const OSMlayerURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  // const londonLatLng = [props.coords.lat, props.coords.lng];

  const imageId = '23967341'
  const apiKey = 'd32b8e8c9fd053981366d517ad2a7cd99441d596ae32dc370bf5f694b6f7f8e5';
  const bandsFormula = 'b04,b03,b02';
  const imageTilesURL = `https://api.spectator.earth/imagery/${imageId}/tiles/{z}/{x}/{y}/?bands_formula=${bandsFormula}&api_key=${apiKey}`;

  //   L.tileLayer(OSMlayerURL).addTo(mapRef.current);
  //   L.tileLayer(imageTilesURL).addTo(mapRef.current);
  //   L.marker(londonLatLng).addTo(mapRef.current).bindPopup('A pretty Sentinel-2 image.').openPopup();


  // const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const [center, setCenter] = useState({ lat: 21.170, lng: 72.8311 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();
  const _created = (e) => console.log(e);
  // const [coords, setCoords] = useState({ lat: 21.1702, lng: 72.8311 });
  const onChangeLat = e => setCenter({ lat: e.target.value, lng: center.lng });
  const onChangeLng = e => setCenter({ lng: e.target.value, lat: center.lat });

  const showMyLocation = () => {
    console.log('here');
    if (mapRef.current) {
      mapRef.current.leafletElement.flyTo(
        [center.lat, center.lng],
        ZOOM_LEVEL,
        { animate: true }
      );
    } else {
      console.log('failed123');
    }
  };


  // return <div id="map" style={style}/>;
  return (
    <div className="col">
      <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
        <FeatureGroup>
          <EditControl
            position="topright"
            onCreated={_created}
            draw={
              {
                // rectangle: false,
                // circle: false,
                // circlemarker: false,
                // marker: false,
                // polyline: false,
              }
            }
          />
        </FeatureGroup>

        <TileLayer
          url={OSMlayerURL}
          attribution={osm.maptiler.attribution}
        />
        <TileLayer
          url={imageTilesURL}
          attribution={osm.maptiler.attribution}
        />
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <form noValidate autoComplete="off">
        <div className="input-field col s12">
          <input onChange={onChangeLat} value={center.lat} />
        </div>
        <div className="input-field col s12">
          <input onChange={onChangeLng} value={center.lng} />
        </div>
      </form>
      <div className="row my-4">
        <div className="col d-flex justify-content-center">
          <button className="btn btn-primary" onClick={showMyLocation}>
            Jump to marker
          </button>
        </div>
      </div>
    </div >
  );
}

export default Map;
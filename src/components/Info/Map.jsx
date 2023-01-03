import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '380px',
  height: '440px'
};

const center = {
  lat: 48.2235226,
  lng: 16.3474202
};

function MyComponentMaps() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDaRhZr0xPA_-SXSA0_seI_Hgy4Z9z55bY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
         < Marker  position={{ lat: 48.2206028, lng: 16.3445994 }} /> 
        <></>
      </GoogleMap>
    </LoadScript>
  )
}
export default React.memo(MyComponentMaps);

// key:  AIzaSyDaRhZr0xPA_-SXSA0_seI_Hgy4Z9z55bY
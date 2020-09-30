import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { EventDataList } from "../data";

export interface MapContainerProps {
  events: EventDataList;
}

const containerStyle = {
  width: '100%',
  height: '100vh'
};
 
const center = {
  lat: 38.736946,
  lng: -9.142685
};

export const MapContainer: React.FC<MapContainerProps> = ({events}) => {
  // const [map, setMap] = React.useState(null)
 
  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])
 
  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])
 
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyB-0F4xMPEYQE7AFgYwOmCAELkyt0fjQEI"
      preventGoogleFontsLoading
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        {events.map((event, index) => <Marker key={index} position={event.location} />)}
      </GoogleMap>
    </LoadScript>
  )
}
 
export default React.memo(MapContainer)
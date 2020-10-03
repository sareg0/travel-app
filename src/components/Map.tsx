import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import type { ContentfulEventEntryCollection } from '../App'

export interface MapContainerProps {
  data: ContentfulEventEntryCollection;
}

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 38.736946,
  lng: -9.142685
};

export const MapContainer: React.FC<MapContainerProps> = ({ data }) => {
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
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      preventGoogleFontsLoading
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
      >
        {data.items.map((item) => (
          <Marker 
            key={item.sys.id} 
            position={{ 
              lat: parseFloat(item.fields.location.lat), 
              lng: parseFloat(item.fields.location.lon) 
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapContainer)
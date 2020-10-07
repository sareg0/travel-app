import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import type { ContentfulEventEntryCollection } from '../App'

export interface MapContainerProps {
  onClick: (id: string) => void
  data: ContentfulEventEntryCollection;
  selectedEventId?: string
}

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 38.736946,
  lng: -9.142685
};

const DEFAULT_ICON = {
    path: 0,
    fillColor: 'red',
    scale: 4.5,
    strokeColor: 'white',
    strokeWeight: 1,
    fillOpacity: 1,
}

export const MapContainer: React.FC<MapContainerProps> = ({ data, onClick, selectedEventId }) => {

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
          icon={selectedEventId == item.sys.id ? undefined : DEFAULT_ICON}
            onClick={() => onClick(item.sys.id)}
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
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 40.4093,
  lng: 49.8671
};

const kontaktShops = [
  { id: 1, name: 'Kontakt.az - Baku Mall', position: { lat: 40.4023, lng: 49.8621 } },
  { id: 2, name: 'Kontakt.az - Ganjlik Mall', position: { lat: 40.4055, lng: 49.8604 } },
  { id: 3, name: 'Kontakt.az - 28 Mall', position: { lat: 40.3871, lng: 49.8352 } },
  { id: 4, name: 'Kontakt.az - Port Baku Mall', position: { lat: 40.3781, lng: 49.8441 } },
  { id: 5, name: 'Kontakt.az - Metro Park', position: { lat: 40.3883, lng: 49.8722 } },
  { id: 6, name: 'Kontakt.az - Sadarak', position: { lat: 40.3161, lng: 49.7861 } },
  { id: 7, name: 'Kontakt.az - Sumqayit', position: { lat: 40.5855, lng: 49.6313 } },
  { id: 8, name: 'Kontakt.az - Ganja', position: { lat: 40.6824, lng: 46.3591 } },
  { id: 9, name: 'Kontakt.az - Nakhchivan', position: { lat: 39.2089, lng: 45.4121 } },
  { id: 10, name: 'Kontakt.az - Shaki', position: { lat: 41.1913, lng: 47.1706 } },
  // Add more locations if needed
];

function MapComponent() {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {kontaktShops.map(shop => (
          <Marker key={shop.id} position={shop.position} title={shop.name} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;

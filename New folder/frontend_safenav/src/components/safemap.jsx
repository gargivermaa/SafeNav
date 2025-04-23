import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define icons
const startIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const endIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/64/64096.png',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const routeColors = ['blue', 'red', 'purple', 'green', 'orange'];

function SafeMap({ routes }) {
  if (!routes || routes.length === 0 || !routes[0].path || routes[0].path.length === 0) {
    return <div>No route data available</div>;
  }

  const center = [routes[0].path[0].lat, routes[0].path[0].lng];

  return (
    <MapContainer center={center} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {routes.map((route, i) => (
        <Polyline
          key={i}
          positions={route.path.map(coord => [coord.lat, coord.lng])}
          color={routeColors[i % routeColors.length]}
          weight={6}
          opacity={0.8}
        >
          <Tooltip sticky>
            Route #{i + 1} <br />
            Safety Score: {route.score.toFixed(2)}
          </Tooltip>
        </Polyline>
      ))}

      <Marker position={[routes[0].path[0].lat, routes[0].path[0].lng]} icon={startIcon}>
        <Popup>Start Point</Popup>
      </Marker>

      <Marker
        position={[
          routes[0].path[routes[0].path.length - 1].lat,
          routes[0].path[routes[0].path.length - 1].lng,
        ]}
        icon={endIcon}
      >
        <Popup>End Point</Popup>
      </Marker>
    </MapContainer>
  );
}

export default SafeMap;

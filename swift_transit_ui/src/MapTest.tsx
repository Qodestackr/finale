import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Card, Container, Title } from "@mantine/core";

type LatLngTuple = [number, number];

export default function Map() {
  // Assuming user.location is an object with lat and lng properties
  const userLocation = { lat: -1.2921, lng: 36.8219 };
  const zoomLevel = 13; // Adjust the zoom level as needed

  return (
    <MapContainer
      center={userLocation}
      zoom={zoomLevel}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Use Marker inside the component */}
      <Marker position={userLocation}>
        <Popup>Hello</Popup>
      </Marker>
      {/* Optional: Add custom location marker */}
    </MapContainer>
  );
}

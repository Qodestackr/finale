// import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L, { LatLngTuple, Marker, Popup } from "leaflet";
// import { earthquake } from "../../types";
// import PlotDisplay from "../PlotDisplay";
// import QuakeInfo from "../QuakeInfo";
// import ColorLegend from "../ColorLegend";
// import { Box, LoadingOverlay, MediaQuery } from "@mantine/core";
// import { useState } from "react";

// interface MapProps {
//   data: Array<earthquake>;
//   center: LatLngTuple;
//   zoom: number;
//   isLoading: boolean;
// }

// const Container = ({ data, center, zoom, isLoading }: MapProps) => {
//   const [selectedQuake, setSelectedQuake] = useState({
//     place: "",
//     mag: 0,
//     time: 0,
//     url: "",
//   });

//   const mapUrl = "https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png";

//   const southWest: LatLngTuple = [-1.0371, 37.0692];
//   const northEast: LatLngTuple = [-1.0371, 37.0692];

//   const mapBounds = L.latLngBounds([southWest, northEast]);
//   // [-1.0371, 37.0692]

//   const thikaMarkerPosition: LatLngTuple = [-1.0371, 37.0692];

//   return (
//     <MapContainer
//       id="mapContainer"
//       style={{
//         height: "100vh",
//       }}
//       center={center}
//       zoom={zoom}
//       keyboard
//       keyboardPanDelta={160}
//       zoomControl={false} // Disable default zoom control
//       minZoom={3}
//       maxBounds={mapBounds}
//       maxBoundsViscosity={1}
//     >
//       <TileLayer
//         url={mapUrl}
//         attribution='&copy; <a href="https://swift-transit-ui.vercel.app/">Swift Transit</a> Developers'
//       />

//       <ZoomControl position="topright" />
//       {/* <Marker position={thikaMarkerPosition}>
//         <Popup>
//           Thika Road - Coordinates: {thikaMarkerPosition[0]}, {thikaMarkerPosition[1]}
//         </Popup>
//       </Marker> */}
//       <div className="leaflet-top leaflet-right">
//         <Box
//           sx={{
//             marginRight: "0.7rem",
//             marginTop: "6rem",
//           }}
//         >
//           <ColorLegend />
//         </Box>
//       </div>
//     </MapContainer>
//   );
// };

// export default Container;



import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import { TileLayer, MapContainer, LayersControl } from "react-leaflet";

import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

// Base map tile:
const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
};

const Map = () => {
  // Set up a useState hook for our map instance:
  const [map, setMap] = useState<any | null>(null);

  // State vars for our routing machine instance:
  const [routingMachine, setRoutingMachine] = useState(null);

  // Start-End points for the routing machine:
  const [start, setStart] = useState([38.9072, -77.0369]);
  const [end, setEnd] = useState([37.7749, -122.4194]);

  // Ref for our routing machine instace:
  const RoutingMachineRef = useRef(null);

  // Create the routing-machine instance:
  useEffect(() => {
    // Check For the map instance:
    if (!map) return;
    if (map) {
      // Assign Control to React Ref:
      RoutingMachineRef.current = L.Routing.control({
        position: "topleft", // Where to position control on map
        lineOptions: {
          // Options for the routing line
          styles: [
            {
              color: "#757de8",
            },
          ],
        },
        waypoints: [start, end], // Point A - Point B
      });
      // Save instance to state:
      setRoutingMachine(RoutingMachineRef.current);
    }
  }, [map]);

  // Once routing machine instance is ready, add to map:
  useEffect(() => {
    if (!routingMachine) return;
    if (routingMachine) {
      routingMachine.addTo(map);
    }
  }, [routingMachine]);

  return (
    <>
      <button>Click To Change Waypoints</button>
      <MapContainer
        center={[37.0902, -95.7129]}
        zoom={3}
        zoomControl={false}
        style={{ height: "100vh", width: "100%", padding: 0 }}
        // Set the map instance to state when ready:
        whenCreated={(map) => setMap(map)}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.base}
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </>
  );
};

export default Map;

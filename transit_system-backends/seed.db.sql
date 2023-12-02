-- The Frequencies table contains information about the frequency of trips. It includes the trip ID, 
-- start time, end time, and headway in seconds. This table helps in determining the frequency of trips 
-- on a specific route during different time intervals.

CREATE TABLE frequencies (
  trip_id TEXT,
  start_time TEXT,
  end_time TEXT,
  headway_secs INTEGER,
  location GEOMETRY(Point, 4326)
);


-- The Routes table stores information about the transit routes. It includes the route ID, agency ID, 
-- route short name, route long name, and route type. This table represents the different routes available 
-- in the transit system, such as bus lines or train lines.

CREATE TABLE routes (
  route_id TEXT,
  agency_id TEXT,
  route_short_name TEXT,
  route_long_name TEXT,
  route_type INTEGER,
  location GEOMETRY(Point, 4326)
);


-- The Shapes table represents the shapes of the transit routes. It includes the shape ID, latitude, longitude, 
-- and shape point sequence. This table is used to define the path or geometry of each route, 
-- allowing the visualization of the route on a map.

CREATE TABLE shapes (
  shape_id TEXT,
  shape_pt_lat NUMERIC,
  shape_pt_lon NUMERIC,
  shape_pt_sequence INTEGER,
  location GEOMETRY(Point, 4326)
);

-- The Stops table contains information about the transit stops. It includes the stop ID, stop name, 
-- latitude, longitude, location type, and parent station. This table represents the physical locations 
-- where passengers can board or alight from transit vehicles. 
-- It provides the necessary data to map and visualize the transit stops.

CREATE TABLE stops (
  stop_id TEXT,
  stop_name TEXT,
  stop_lat NUMERIC,
  stop_lon NUMERIC,
  location_type INTEGER,
  parent_station TEXT,
  location GEOMETRY(Point, 4326)
);


-- The Stop Times table stores information about the scheduled arrival and departure times at each stop 
-- for a specific trip. It includes the trip ID, arrival time, departure time, stop ID, and stop sequence. 
-- This table helps in determining the sequence and timing of stops along a trip.

CREATE TABLE stop_times (
  trip_id TEXT,
  arrival_time TEXT,
  departure_time TEXT,
  stop_id TEXT,
  stop_sequence INTEGER,
  location GEOMETRY(Point, 4326)
);

-- The Trips table contains information about individual trips within a route. 
-- It includes the route ID, service ID, trip ID, trip headsign, direction ID, and shape ID. 
-- This table represents the specific trips that vehicles make along a route, with details such as 
-- the trip headsign (destination) and the associated shape (geometry) of the trip.

CREATE TABLE trips (
  route_id TEXT,
  service_id TEXT,
  trip_id TEXT,
  trip_headsign TEXT,
  direction_id INTEGER,
  shape_id TEXT,
  location GEOMETRY(Point, 4326)
);

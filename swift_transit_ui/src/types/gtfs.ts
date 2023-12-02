export interface GTFSFeed {
    agency: Agency[];
    stops: Stop[];
    routes: Route[];
    trips: Trip[];
    stopTimes: StopTime[];
}

interface Agency {
    agency_id: string;
    agency_name: string;
    agency_url: string;
    agency_timezone: string;
    agency_lang?: string;
    agency_phone?: string;
    agency_fare_url?: string;
}

interface Stop {
    stop_id: string;
    stop_name: string;
    stop_lat: number;
    stop_lon: number;
}

interface Route {
    route_id: string;
    agency_id: string;
    route_short_name: string;
    route_long_name: string;
    route_type: number;
}

interface Trip {
    route_id: string;
    service_id: string;
    trip_id: string;
    trip_headsign?: string;
}

export interface StopTime {
    trip_id: string;
    arrival_time: string;
    departure_time: string;
    stop_id: string;
    stop_sequence: number;
}

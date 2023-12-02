export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface Bounds {
    southwest: Coordinates;
    northeast: Coordinates;
}

export interface Point {
    coordinates: Coordinates;
}

export interface LineString {
    coordinates: Coordinates[];
}

export interface Polygon {
    coordinates: Coordinates[][];
}

export interface MultiPoint {
    points: Point[];
}

export interface MultiLineString {
    lineStrings: LineString[];
}

export interface MultiPolygon {
    polygons: Polygon[];
}

export interface GeometryCollection {
    geometries: (
        | Point
        | LineString
        | Polygon
        | MultiPoint
        | MultiLineString
        | MultiPolygon
    )[];
}

// Navigation
export interface Location {
    latitude: number;
    longitude: number;
}

export interface Route {
    id: string;
    name: string;
    waypoints: Location[];
    distance: number;
    duration: number;
}

export interface TransitStop {
    id: string;
    name: string;
    location: Location;
    arrivalTime: Date;
    departureTime: Date;
    isBoardingStop: boolean;
    isAlightingStop: boolean;
}

export interface Trip {
    id: string;
    routeId: string;
    startTime: Date;
    endTime: Date;
    stops: TransitStop[];
}

export interface Vehicle {
    id: string;
    licensePlate: string;
    location: Location;
    speed: number;
    heading: number;
    routeId: string;
    tripId: string;
    arrivalTime: Date;
}

export interface RealTimeUpdate {
    vehicle: Vehicle;
    timestamp: Date;
}

export interface NavigationResult {
    origin: Location;
    destination: Location;
    routes: Route[];
    duration: number;
}

export interface RealTimeFlow {
    tripId: string;
    routeId: string;
    stops: TransitStop[];
    vehicles: Vehicle[];
}

export interface Schedule {
    weekdays: string[];
    weekends: string[];
}


interface GeolocationOptions {
    enableHighAccuracy?: boolean;
    timeout?: number;
    maximumAge?: number;
}

interface GeolocationPosition {
    coords: GeolocationCoordinates;
    timestamp: number;
}

interface GeolocationError {
    code: number;
    message: string;
}

export interface Geolocation {
    getCurrentPosition(
        successCallback: (position: GeolocationPosition) => void,
        errorCallback?: (error: GeolocationError) => void,
        options?: GeolocationOptions
    ): void;

    watchPosition(
        successCallback: (position: GeolocationPosition) => void,
        errorCallback?: (error: GeolocationError) => void,
        options?: GeolocationOptions
    ): number;

    clearWatch(watchId: number): void;
}
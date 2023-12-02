/** An object able to programmatically obtain the position of the device. It gives Web content
 * access to the location of the device. This allows a Web site or app to offer customized results based
 * on the user's location. */

// const currentGeoloc:Geolocation = {

// }

const Coordinates: GeolocationCoordinates = {
    accuracy: 96,
    altitude: 0.456,
    altitudeAccuracy: 98,
    heading: 20,
    latitude: 45,
    longitude: 60,
    speed: 86,
};

const position: GeolocationPosition = {
    coords: Coordinates,
    timestamp: 900, // EpochTimestamp
};

const geolocationPermission: PermissionName = "geolocation";

const GeolocationError: GeolocationPositionError = {
    code: 404, // number
    message: "Geolocation Position Error",
    PERMISSION_DENIED: 1,
    POSITION_UNAVAILABLE: 2,
    TIMEOUT: 3,
};

// Data object interface

interface Coordinates {
    latitude: number;
    longitude: number;
}

interface Stop {
    name: string;
    location: Coordinates;
}

export function calculateDistance(
    pointA: Coordinates,
    pointB: Coordinates
): number {
    const earthRadius = 6371; // Earth's radius in kilometers

    const { latitude: lat1, longitude: lon1 } = pointA;
    const { latitude: lat2, longitude: lon2 } = pointB;

    const dLat = degreesToRadians(lat2 - lat1);
    const dLon = degreesToRadians(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(degreesToRadians(lat1)) *
        Math.cos(degreesToRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;

    return distance;
}

export function getNearestStop(
    userLocation: Coordinates,
    stops: Stop[]
): Stop | null {
    let nearestStop: Stop | null = null;
    let nearestDistance = Infinity;

    for (const stop of stops) {
        const distance = calculateDistance(userLocation, stop.location);
        if (distance < nearestDistance) {
            nearestStop = stop;
            nearestDistance = distance;
        }
    }

    return nearestStop;
}

export function getDirection(start: Coordinates, end: Coordinates): string {
    const { latitude: lat1, longitude: lon1 } = start;
    const { latitude: lat2, longitude: lon2 } = end;

    const dLon = degreesToRadians(lon2 - lon1);

    const y = Math.sin(dLon) * Math.cos(degreesToRadians(lat2));
    const x =
        Math.cos(degreesToRadians(lat1)) * Math.sin(degreesToRadians(lat2)) -
        Math.sin(degreesToRadians(lat1)) *
        Math.cos(degreesToRadians(lat2)) *
        Math.cos(dLon);

    const bearing = radiansToDegrees(Math.atan2(y, x));

    const cardinalDirections = [
        "north",
        "northeast",
        "east",
        "southeast",
        "south",
        "southwest",
        "west",
        "northwest",
    ];
    const index = Math.round(((bearing + 360) % 360) / 45);

    return cardinalDirections[index];
}

function degreesToRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
}

function radiansToDegrees(radians: number): number {
    return (radians * 180) / Math.PI;
}

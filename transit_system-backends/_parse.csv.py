# parse_gtfs.py

import csv
from yourapp.models import Stop, Route, Trip

def load_gtfs_data():
    with open('stops.txt', 'r') as stops_file:
        stops_data = csv.DictReader(stops_file)
        for stop_data in stops_data:
            Stop.objects.create(name=stop_data['stop_name'], latitude=stop_data['stop_lat'], longitude=stop_data['stop_lon'])

    with open('routes.txt', 'r') as routes_file:
        routes_data = csv.DictReader(routes_file)
        for route_data in routes_data:
            Route.objects.create(name=route_data['route_short_name'])

    with open('trips.txt', 'r') as trips_file:
        trips_data = csv.DictReader(trips_file)
        for trip_data in trips_data:
            Trip.objects.create(route_id=trip_data['route_id'], trip_id=trip_data['trip_id'])
# 2. Run the Script to Load Data:
# python manage.py shell < parse_gtfs.py

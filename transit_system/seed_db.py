import pandas as pd
import geopandas as gpd
from shapely import wkt
import psycopg2

# Read stops data from CSV using pandas
STOPS_DATAFRAME = pd.read_csv(
    '/home/qodestackr/Desktop/data-analysis/gtfs & csv/GTFS_FEED_2019/stops.txt')

# Create a GeoDataFrame with geometry column
STOPS_GEO_DATAFRAME = gpd.GeoDataFrame(STOPS_DATAFRAME, geometry=gpd.points_from_xy(
    STOPS_DATAFRAME['stop_lon'], STOPS_DATAFRAME['stop_lat']))

# Configure database connection
DATABASE_URL = 'postgresql://Qodestackr:h5GlDp0cOBmd@ep-twilight-fire-296088.eu-central-1.aws.neon.tech/neondb'


def create_table(cursor):
    # Create the stops table if it doesn't exist
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS stops (
            stop_id VARCHAR PRIMARY KEY,
            stop_name VARCHAR,
            location GEOMETRY(Point, 4326)
        )
    ''')


def insert_data(cursor, data):
    # Convert Point geometry to WKT
    point_wkt = wkt.dumps(data[2])

    # Insert data into the stops table
    cursor.execute('''
        INSERT INTO stops (stop_id, stop_name, location)
        VALUES (%s, %s, ST_SetSRID(ST_GeomFromText(%s), 4326))
    ''', (data[0], data[1], point_wkt))


def seed_db():
    # Connect to the database
    with psycopg2.connect(DATABASE_URL) as conn:
        with conn.cursor() as cursor:
            # Enable the PostGIS extension if not enabled
            cursor.execute('CREATE EXTENSION IF NOT EXISTS postgis')

            # Create the stops table
            create_table(cursor)

            # Insert data into the stops table
            for _, row in STOPS_GEO_DATAFRAME.iterrows():
                values = (row['stop_id'], row['stop_name'], row['geometry'])
                insert_data(cursor, values)

            conn.commit()


if __name__ == '__main__':
    seed_db()

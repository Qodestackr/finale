import pandas as pd
import geopandas as geopd
import matplotlib.pyplot as plt

# Load GTFS data into a pandas DataFrame
STOPS_DATAFRAME = pd.read_csv('/home/qodestackr/Desktop/data-analysis/gtfs & csv/GTFS_FEED_2019/stops.txt')

ROUTES_DATAFRAME = pd.read_csv('/home/qodestackr/Desktop/data-analysis/gtfs & csv/GTFS_FEED_2019/routes.txt')

# Convert DataFrame to a GeoDataFrame
STOPS_GEO_DATAFRAME = geopd.GeoDataFrame(STOPS_DATAFRAME, geometry=geopd.points_from_xy(STOPS_DATAFRAME['stop_lon'], STOPS_DATAFRAME['stop_lat']))

STOPS_GEO_DATAFRAME.plot()


# MORE GEOPD methods:
# from geopandas.geoseries import GeoSeries
# from geopandas.geodataframe import GeoDataFrame
# from geopandas.array import points_from_xy


# filter_thika_route = ROUTES_DATAFRAME['route_name'] == 'Munyu Road-Pangani-Roysabu-Githurai-KU-Ruiru-Juja-Thika'


if __name__ == '__main__':
    # plt.show()
    # Display the first few rows
    print(STOPS_DATAFRAME.head())

    # Check the number of rows and columns
    print(STOPS_DATAFRAME.shape)

    # Get summary statistics
    print(STOPS_DATAFRAME.describe())

    # Check the data types of each column
    print(STOPS_DATAFRAME.dtypes)


# first 6 rows and the cols
# ROUTES_DATAFRAME.loc[0:5, ['route_id', 'route_long_name']]

import pandas as pd
import geopandas as gpd

HOME_PATH = "/home/qodestackr/Desktop/data-analysis/gtfs & csv/GTFS_FEED_2019/"


def create_df_with_fallback(data_sources):
    for source in data_sources:
        try:
            if source.endswith('.csv'):
                df = pd.read_csv(source)
            elif source.endswith('.html'):
                df = pd.read_html(source)[0]  # Assuming HTML tables
            elif source.startswith('postgresql://'):
                # Code to fetch data from PostgreSQL database using psycopg2 or other libraries
                pass
            # Add more fallback options as needed for different data sources
            # elif source.startswith('http://'):
            #     # Code to fetch data from an API or web service
            #     pass
            else:
                # Handle unsupported data sources or raise an exception
                raise ValueError(f"Unsupported data source: {source}")

            # Return the dataframe if successfully loaded
            return df

        except Exception as e:
            print(f"Error loading data from {source}: {str(e)}")

    # If none of the data sources worked, return None or raise an exception
    return None


# Example usage:
data_sources = [
    HOME_PATH + 'shapes.txt',  # CSV file
    HOME_PATH + 'data.html',  # HTML file
    'postgresql://localhost:5432/mydatabase',  # PostgreSQL database connection
    # Add more data sources as needed
]

df = create_df_with_fallback(data_sources)

if df is not None:
    # Continue with further processing on the dataframe
    print(df.head())
else:
    print("Unable to load data from any of the specified sources.")

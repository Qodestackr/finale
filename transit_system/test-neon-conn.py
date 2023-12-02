import psycopg2

# Connection details
host = "ep-twilight-fire-296088.eu-central-1.aws.neon.tech"
port = "5432"
database = "neondb"
user = "Qodestackr"
password = "h5GlDp0cOBmd"

# Establish a connection
conn = psycopg2.connect(
    host=host,
    port=port,
    database=database,
    user=user,
    password=password
)

# Create a cursor
cursor = conn.cursor()

# Execute a query
cursor.execute("SELECT version()")

# Fetch the result
result = cursor.fetchone()
print(result)

# Close the cursor and connection
cursor.close()
conn.close()

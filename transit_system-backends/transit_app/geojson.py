# renderers.py

from rest_framework.renderers import JSONRenderer

class GeoJSONRenderer(JSONRenderer):
    media_type = 'application/vnd.geo+json'


# '''
# 4. GeoJSON Response:
# To specifically return GeoJSON, you may need to customize the response. 
# You can create a custom renderer for this purpose. Here's a simple example:
# '''
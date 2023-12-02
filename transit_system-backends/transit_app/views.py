from rest_framework import generics
from .models import Stop, Route, Trip
from .serializers import StopSerializer, RouteSerializer, TripSerializer

class StopList(generics.ListCreateAPIView):
    queryset = Stop.objects.all()
    serializer_class = StopSerializer
    #     renderer_classes = [GeoJSONRenderer]



# class StopList(generics.ListCreateAPIView):
#     queryset = Stop.objects.all()
#     serializer_class = StopSerializer


class RouteList(generics.ListCreateAPIView):
    queryset = Route.objects.all()
    serializer_class = RouteSerializer

class TripList(generics.ListCreateAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer

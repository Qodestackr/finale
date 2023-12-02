from rest_framework import serializers
from .models import Stop, Route, Trip


# class StopSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Stop
#         fields = ('id', 'name', 'latitude', 'longitude')


class StopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stop
        fields = '__all__'

class RouteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Route
        fields = '__all__'

class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = '__all__'
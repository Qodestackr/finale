from django.urls import path
from .views import StopList, RouteList, TripList

urlpatterns = [
    path('stops/', StopList.as_view(), name='stop-list'),
    path('routes/', RouteList.as_view(), name='route-list'),
    path('trips/', TripList.as_view(), name='trip-list'),
]
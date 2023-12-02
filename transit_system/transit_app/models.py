from django.db import models

class Stop(models.Model):
    name = models.CharField(max_length=255)
    # Add other relevant fields

class Route(models.Model):
    name = models.CharField(max_length=255)
    # Add other relevant fields

class Trip(models.Model):
    route = models.ForeignKey(Route, on_delete=models.CASCADE)
    # Add other relevant fields

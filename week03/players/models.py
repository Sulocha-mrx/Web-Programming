
from django.db import models


class Position(models.Model):
    name = models.CharField(max_length=100, unique=True)
    is_specialist = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class Player(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    positions = models.ManyToManyField(Position)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
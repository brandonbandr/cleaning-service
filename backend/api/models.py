from django.db import models

# Create your models here.
class Dates(models.Model):

    date = models.DateTimeField(auto_now_add=True)

    day = models.CharField(primary_key=True, max_length=50)
    name = models.CharField(max_length=60)
    time = models.CharField(max_length=50)
    number = models.CharField(max_length=12)

from rest_framework.serializers import ModelSerializer
from .models import Dates

class DateSerializer(ModelSerializer):

    class Meta():

        model = Dates
        fields = '__all__'

        
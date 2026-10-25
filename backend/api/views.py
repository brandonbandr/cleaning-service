from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import DateSerializer
from .models import Dates
from .functs.CalendarDays import Calendar
import datetime as dt
from rest_framework import generics
from .functs.Sender import Sender

# CALENDAR VIEW
class Info(APIView):

    serializer = DateSerializer

    # mn IS MONTH
    def get(self, requests, time):

        m_y = time.split('-')
        m_y = list(map(lambda x: int(x), m_y))
        # GET THE DATES 
        calendar = Calendar(m_y[0], m_y[1], [item for item in Dates.objects.all()])

        # SEND INFO BACK
        return Response(calendar.generate())
    
class Changer(APIView):
    serializer_class = DateSerializer 

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            
            serializer.save()
            Sender(serializer.data) 
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


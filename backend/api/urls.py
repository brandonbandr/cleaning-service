from django.urls import path
from .views import Info, Changer

urlpatterns = [

    path('submit/', Changer.as_view(), name="Submit"),
    path('<str:time>/', Info.as_view(), name='Info'),
]
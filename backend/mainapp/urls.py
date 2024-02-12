
from django.urls import path, include
from .views import *

urlpatterns = [

    
  path('app/home', HomeView, name='home'),

    
]
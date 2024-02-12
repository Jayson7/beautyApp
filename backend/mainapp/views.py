from django.shortcuts import render

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response



# Create your views here.

# hompage. showcase all featured product and trending products
@api_view(['GET'])
def HomeView(request):
    return None
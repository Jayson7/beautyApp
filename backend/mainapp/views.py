from django.shortcuts import render
from rest_framework import generics
from rest_framework import status
from rest_framework.decorators import api_view,  permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import *# Import your Product model

from .serializers import *

# Create your views here.

# hompage. showcase all featured product and trending products


class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductFeaturedView(generics.ListAPIView):
    queryset = Product.objects.all().filter(featured=True)
    serializer_class = ProductSerializer

class ProductFastSalesView(generics.ListAPIView):
    queryset = Product.objects.all().filter(fast_sales=True)
    serializer_class = FastProductSerializer

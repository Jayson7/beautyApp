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
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def HomeView(request):

        # Retrieve featured and trending products from your database
        # featured_products = Product.objects.filter(is_featured=True)
        # trending_products = Product.objects.filter(is_trending=True)

        # Serialize the products data if you have serializers
        # featured_serializer_data = YourProductSerializer(featured_products, many=True).data
        # trending_serializer_data = YourProductSerializer(trending_products, many=True).data

        # Prepare the response content
        content = {
            'message': 'Welcome to the JWT Authentication page using React Js and Django!',
            # 'featured_products': featured_serializer_data,
            # 'trending_products': trending_serializer_data
        }

        return Response(content)

    



class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductFeaturedView(generics.ListAPIView):
    queryset = Product.objects.all().filter(featured=True)
    serializer_class = ProductSerializer

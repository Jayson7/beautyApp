
from django.urls import path, include
from .views import *

urlpatterns = [

    
  path('productList', ProductListAPIView, name='productlist'),
  path('fproductList', ProductFeaturedView, name='fproductlist'),

    
]
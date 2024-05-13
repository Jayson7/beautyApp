
from django.urls import path, include
from .views import *

urlpatterns = [

    
  path('productlist', ProductListAPIView.as_view(), name='productlist'),
  path('fproductList', ProductFeaturedView.as_view(), name='fproductlist'),

    
]
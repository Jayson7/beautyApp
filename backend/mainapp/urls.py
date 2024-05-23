
from django.urls import path, include
from .views import *

urlpatterns = [

    
  path('productlist', ProductListAPIView.as_view(), name='productlist'),
  path('fproducts', ProductFeaturedView.as_view(), name='fproducts'),
  path('fastproducts', ProductFastSalesView.as_view(), name='fastproducts'),

    
]
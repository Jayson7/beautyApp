

from django.urls import path, include
from .views import *
from rest_framework_simplejwt.views import TokenVerifyView, TokenRefreshView, TokenObtainPairView

urlpatterns = [

  path('register', registerUsers, name='register'),
  path('logout', Logout, name='logout'),
  
  path('token', TokenObtainPairView.as_view(), name ='token_obtain_pair'),
  path('token/refresh', TokenRefreshView.as_view(), name ='token_refresh'),
  path('token/verify',  TokenVerifyView.as_view(), name='refresh'  ),
    
]
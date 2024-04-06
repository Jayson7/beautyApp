

from django.urls import path, include
from .views import *
from rest_framework_simplejwt.views import TokenVerifyView, TokenRefreshView, TokenObtainPairView
from .views import signup, signin


urlpatterns = [

 path('signup/', signup, name='signup'),
    path('signin/', signin, name='signin'),

  
  path('token', TokenObtainPairView.as_view(), name ='token_obtain_pair'),
  path('token/refresh', TokenRefreshView.as_view(), name ='token_refresh'),
  path('token/verify',  TokenVerifyView.as_view(), name='refresh'  ),
    
]

from django.contrib import admin
from django.urls import path, include

urlpatterns = [

    path('admin', admin.site.urls),
    path('', include('rest_framework.urls')),
    path('', include('mainapp.urls')),
    path('', include('authentications.urls')),
    
]
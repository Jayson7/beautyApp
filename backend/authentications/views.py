from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from rest_framework.decorators import api_view,  permission_classes


# Create your views here.

# register users
def registerUsers(request):
    pass


# logout
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def Logout(request):
    
    try:       
        refresh_token = request.data["refresh_token"]               
        token = RefreshToken(refresh_token)               
        token.blacklist()               
        return Response(status=status.HTTP_205_RESET_CONTENT)          
    except Exception as e:         
        return Response(status=status.HTTP_400_BAD_REQUEST)
  

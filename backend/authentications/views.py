from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view,  permission_classes


# Create your views here.

# register users
def registerUsers(request):
    pass


# logout
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def Logout(request):
    refresh_token = request.data.get('refresh_token')

    if not refresh_token:
        return Response({'error': 'Refresh token is required'}, status=400)

    try:
        RefreshToken(refresh_token).blacklist()
    except Exception as e:
        return Response({'error': f'Error during token blacklist: {str(e)}'}, status=500)

    return Response({'success': 'User successfully signed out'})
from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view,  permission_classes
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSerializer
from django.contrib.auth import authenticate

# Create your views here.

# sign up
@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    print(request.data)
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        return Response({
            # 'refresh': str(refresh),
            # 'access': str(refresh.access_token),
            'message': 'User created successfully'
        }, status=201)
    return Response(serializer.errors, status=400)





# sign in 
@api_view(['POST'])
@permission_classes([AllowAny])
def signin(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if username is None or password is None:
        return Response({'error': 'Please provide both username and password'}, status=400)

    user = authenticate(username=username, password=password)

    if not user:
        return Response({'error': 'Invalid credentials'}, status=400)

    refresh = RefreshToken.for_user(user)

    return Response({
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }, status=200)


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
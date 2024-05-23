from rest_framework import serializers
from .models import *

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


# ######################################################


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email', 'phone_number', 'full_name')

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError("Passwords do not match")
        return data

    def create(self, validated_data):
        validated_data.pop('password2')  # Remove password2 from validated_data
        user = User.objects.create_user(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

# ######################################################




class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)

        # Add custom claims
        token['username'] = user.username
        return token


















##########################################################
# vendors serializers 
# class VendorsSrializers(serializers.Serializer):
#         id = serializers.IntegerField(read_only=True)
#         name_of_company = serializers.CharField(required=False, allow_blank=False, max_length=100) 
#         registration_number = serializers.CharField(required=False, allow_blank=False, max_length=100)
#         address = serializers.CharField(required=False, allow_blank=False, max_length=100) 
#         address = serializers.CharField(required=False, allow_blank=False, max_length=100) 
#         address = serializers.CharField(required=False, allow_blank=False, max_length=100) 
#         def create(self, validated_data):
#             """
#         return a new Vendor profile base on the validated data
#         """
#         return Snippet.objects.create(**validated_data)

#         def update(self, instance, validated_data):
#             """
#             Update and return an existing Vendor profile instance, given the validated data.
#             """
#             instance.name_of_company= validated_data.get('name_of_company', instance.name_of_company)
#             instance.registration_number = validated_data.get('registration_number', instance.registration_number)
#             instance.address = validated_data.get('address', instance.address)
#             instance.contact_number= validated_data.get('contact_number', instance.contact_number)
#             instance.stars = validated_data.get('stars', instance.stars)
#             instance.save()
#             return instance
from rest_framework import serializers
from .models import *

# vendors serializers 

class VendorsSrializers(serializers.Serializer):
        id = serializers.IntegerField(read_only=True)
        name_of_company = serializers.CharField(required=False, allow_blank=False, max_length=100) 
        registration_number = serializers.CharField(required=False, allow_blank=False, max_length=100)
        address = serializers.CharField(required=False, allow_blank=False, max_length=100) 
        address = serializers.CharField(required=False, allow_blank=False, max_length=100) 
        address = serializers.CharField(required=False, allow_blank=False, max_length=100) 
        def create(self, validated_data):
            """
        return a new Vendor profile base on the validated data
        """
        return Snippet.objects.create(**validated_data)

        def update(self, instance, validated_data):
            """
            Update and return an existing Vendor profile instance, given the validated data.
            """
            instance.name_of_company= validated_data.get('name_of_company', instance.name_of_company)
            instance.registration_number = validated_data.get('registration_number', instance.registration_number)
            instance.address = validated_data.get('address', instance.address)
            instance.contact_number= validated_data.get('contact_number', instance.contact_number)
            instance.stars = validated_data.get('stars', instance.stars)
            instance.save()
            return instance
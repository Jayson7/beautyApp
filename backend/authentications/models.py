from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class User(AbstractUser):
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    full_name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        db_table = 'auth_user'
        managed = False

class MyGroup(Group):
    class Meta:
        db_table = 'auth_group'
        managed = False

class MyPermission(Permission):
    class Meta:
        db_table = 'auth_permission'
        managed = False

from django.db import models

# Create your models here.


# all vendors 
class Vendor(models.Model):
    
    name_of_company = models.CharField(max_length=100)
    registration_number = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    contact_number = models.CharField(max_length=17)
    stars = models.CharField(max_length=5)


    def __str__(self):
        return self.name_of_company
    
# all  full profiles
class Profile(models.Model):
    
    pass 





# all products 
class Products(models.Model):
    pass 

from django.db import models

# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    discount = models.IntegerField()
    in_stock = models.IntegerField()
    fast_sales = models.BooleanField(default=False)
    def __str__(self):
        return self.name
    
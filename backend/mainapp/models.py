from django.db import models

# Create your models here.

choice_category = [
    ('Cream' ,'Cream'),
    ('Lotion' , 'Lotion'),
    ('Haircream' , 'Haircream'),
    ('pancake' , 'pancake'),
    ('Powder' , 'Powder'),
    ('Eyebrown' , 'Eyebrown'),
    ('Eyelashes' , 'Eyelashes'),
]


class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    discount = models.IntegerField()
    in_stock = models.IntegerField()
    fast_sales = models.BooleanField(default=False)
    views = models.PositiveIntegerField(default=0)
    featured = models.BooleanField(default=False)
    Fast = models.BooleanField(default=False)
    category = models.CharField(max_length=30,choices=choice_category)
    image_url = models.URLField()
    
    
    def __str__(self):
        return self.name
    
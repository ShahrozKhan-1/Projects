from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null= True)
    productname = models.CharField(max_length=100)
    product_img = models.ImageField(upload_to="product-image/" ,null=True, blank=True)
    productbrand = models.CharField(max_length=100, blank=True, null=True)
    productcategory = models.CharField(max_length=100, blank=True, null=True)
    productinfo = models.TextField(blank=True, null=True)
    rating = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    stockcount = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.productname
    
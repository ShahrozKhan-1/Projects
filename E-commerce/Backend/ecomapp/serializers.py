from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *
from rest_framework_simplejwt.tokens import RefreshToken


class ProductSerializer(serializers.ModelSerializer):
    product_img = serializers.ImageField(use_url=True)
    class Meta:
        model = Product
        fields = "__all__"
                
from django.urls import path
from .views import *


urlpatterns = [
    path('first/', first),
    path('products/', getProducts, name="Get_products"),
    path('products/<str:pk>/', singleProduct, name="Get_Single_products"),
]
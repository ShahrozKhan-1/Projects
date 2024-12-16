from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
# from .products import products
from django.contrib.auth.hashers import make_password
from rest_framework import status
from .serializers import *
from .models import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


def first(request):
    return HttpResponse("this is first api")


@api_view(['GET'])
def getProducts(request):
    queryset = Product.objects.all()
    serializer = ProductSerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def singleProduct(request, pk):
    queryset = Product.objects.get(id=pk)
    serializer = ProductSerializer(queryset, many=False)
    return Response(serializer.data)

# Create your views here.

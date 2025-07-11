from django.shortcuts import render
from .serilizer import UserSerilizer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerilizer
    permission_classes = [AllowAny]

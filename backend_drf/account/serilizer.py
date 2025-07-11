from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerilizer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True,min_length= 8, style={"input_type":"password"})
    class Meta:
        model =User
        fields = ["username",'email','password']

    def create(self,validate_data):
        # user.objects.create = save the password in plain text
        #user.objects.create_user = automatically hash the passsword
        user = User.objects.create_user(
            validate_data['username'],
            validate_data['email'],
            validate_data['password']
        )
        # user = User.objects.create_user(**validate_data)
        return user
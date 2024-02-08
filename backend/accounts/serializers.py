from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model, authenticate
from rest_framework import serializers


UserCustomModel = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCustomModel
        fields = '__all__'

    def validate_registration(self, data):
        email = data.get('email')
        password = data.get('password')
        username = data.get('username')
        if not email or UserCustomModel.objects.filter(email=email).exists():
            raise ValidationError('choose another email')
        if not (password or username):
            raise ValidationError('Either password or username is empty')

    def create(self, validated_data):
        user_instance = UserCustomModel.objects.create_user(
            email=validated_data['email'], password=validated_data['password'])
        user_instance.username = validated_data['username']
        user_instance.save()
        return user_instance


class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    class Meta:
        model = UserCustomModel
        fields = ("email", "password")

    def login_user(self, data):
        email = data.get('email')
        password = data.get('password')
        user = authenticate(username=email, password=password)
        if not user:
            raise ValidationError('such user does not exist')
        return user


class UserViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCustomModel
        fields = ('username', 'email')

from rest_framework import serializers
from .models import Category, Item, Bid

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

class BidSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bid
        fields = '__all__'

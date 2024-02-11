from rest_framework import serializers
from .models import Category, Item, Bid

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['title', 'description', 'starting_bid', 'current_bid', 'image_url', 'category', 'end_time', 'is_active', 'owner']


class BidSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bid
        fields = '__all__'

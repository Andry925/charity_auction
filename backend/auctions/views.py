from django.shortcuts import render
from rest_framework import generics, permissions, status
from rest_framework.exceptions import ValidationError
from .models import Category, Item, Bid
from .serializers import CategorySerializer, ItemSerializer, BidSerializer
from django.core.exceptions import PermissionDenied
from django.utils import timezone
from rest_framework.response import Response
from rest_framework.views import APIView


from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.reverse import reverse

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'categories': reverse('category-list', request=request, format=format),
        'items': reverse('item-list', request=request, format=format),
        'bids': reverse('bid-list', request=request, format=format),
        # Add more APIs here
    })


class APIRootView(APIView):
    def get(self, request):
        api_endpoints = {
            'categories': request.build_absolute_uri('categories/'),
            'items': request.build_absolute_uri('items/'),
            'bids': request.build_absolute_uri('bids/'),
            'create-auction': request.build_absolute_uri('create-auction/'),
            'latest-items': request.build_absolute_uri('latest-items/'),
        }
        return Response(api_endpoints)

class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.AllowAny]

class EditAuctionAPIView(generics.UpdateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ItemSerializer

    def get_queryset(self):
        return Item.objects.filter(owner=self.request.user)

    def perform_update(self, serializer):
        if serializer.instance.owner != self.request.user:
            raise PermissionDenied('You do not have permission to edit this auction.')
        serializer.save()

class ItemListView(generics.ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [permissions.AllowAny]

class CreateAuctionAPIView(generics.CreateAPIView):
    #permission_classes = [permissions.IsAuthenticated]
    serializer_class = ItemSerializer

    #def perform_create(self, serializer):
        #serializer.save(owner=self.request.user)

class BidListView(generics.ListAPIView):
    queryset = Bid.objects.all()
    serializer_class = BidSerializer
    permission_classes = [permissions.AllowAny]

class LatestItemsListAPIView(generics.ListAPIView):
    queryset = Item.objects.filter(is_active=True).order_by('-id')[:5]
    serializer_class = ItemSerializer
    permission_classes = [permissions.AllowAny]

class CreateBidView(generics.CreateAPIView):
    #permission_classes = [permissions.IsAuthenticated]
    serializer_class = BidSerializer

    def perform_create(self, serializer):
        item_id = serializer.validated_data['item'].id
        bid_amount = serializer.validated_data['bid_amount']
        item = Item.objects.get(id=item_id)
        if item.is_active and item.end_time > timezone.now():
            if bid_amount > item.current_bid:
                serializer.save(bidder=self.request.user, item=item)
                item.current_bid = bid_amount
                item.save(update_fields=['current_bid'])
            else:
                raise ValidationError("Your bid must be higher than the current bid.")
        else:
            raise ValidationError("Item is not active or auction has ended.")

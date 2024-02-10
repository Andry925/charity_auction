from django.shortcuts import render
from rest_framework import generics, permissions, status
from rest_framework.exceptions import ValidationError
from .models import Category, Item, Bid
from .serializers import CategorySerializer, ItemSerializer, BidSerializer
from django.core.exceptions import PermissionDenied
from django.utils import timezone
from rest_framework.response import Response
from rest_framework.views import APIView

class APIRootView(APIView):
    """
    API Root view to display a welcome message or list available endpoints.
    """
    def get(self, request):
        # Example response. You can customize it or list available endpoints
        api_endpoints = {
            'categories': request.build_absolute_uri('categories/'),
            'items': request.build_absolute_uri('items/'),
            'bids': request.build_absolute_uri('bids/'),
            'create-auction': request.build_absolute_uri('create-auction/'),
            'latest-items': request.build_absolute_uri('latest-items/'),
            # Add other endpoints as needed
        }
        return Response(api_endpoints)

def home_view(request):
    categories = Category.objects.all()
    latest_items = Item.objects.filter(is_active=True).order_by('-id')[:10]
    return render(request, 'home.html', {'categories': categories, 'latest_items': latest_items})

def auction_list(request):
    auctions = Item.objects.filter(is_active=True).order_by('-end_time')
    return render(request, 'auctions.html', {'auctions': auctions})

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
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ItemSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class BidListView(generics.ListAPIView):
    queryset = Bid.objects.all()
    serializer_class = BidSerializer
    permission_classes = [permissions.AllowAny]

class LatestItemsListAPIView(generics.ListAPIView):
    queryset = Item.objects.filter(is_active=True).order_by('-id')[:10]
    serializer_class = ItemSerializer
    permission_classes = [permissions.AllowAny]

class CreateBidView(generics.CreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
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

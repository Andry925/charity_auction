from django.http import JsonResponse
from django.utils import timezone
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .models import Category, Item, Bid
from .serializers import CategorySerializer, ItemSerializer, BidSerializer
from django.shortcuts import render
from .models import Category, Item, Bid
# Serve the React App

'''def index(request):
    try:
        return render(request, 'frontend/public/index.html')
    except FileNotFoundError:
        return JsonResponse({
            "error": "React app not built. Run `npm run build` in the frontend directory."
        }, status=501)'''

def home_view(request):
    categories = Category.objects.all()
    items = Item.objects.all()
    return render(request, 'home.html', {'categories': categories, 'items': items})

def auction_list(request):
    auctions = Item.objects.filter(is_active=True)
    return render(request, 'auctions.html', {'auctions': auctions})

class CategoryListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)


class ItemListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        items = Item.objects.all()
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data)


class BidListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        bids = Bid.objects.all()
        serializer = BidSerializer(bids, many=True)
        return Response(serializer.data)


class CreateBidView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        serializer = BidSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            item_id = serializer.validated_data['item'].id
            bid_amount = serializer.validated_data['bid_amount']
            item = Item.objects.get(id=item_id)
            if item.is_active and item.end_time > timezone.now():
                if bid_amount > item.current_bid:
                    serializer.save(bidder=request.user, item=item)
                    item.current_bid = bid_amount
                    item.save(update_fields=['current_bid'])
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                else:
                    return Response({"error": "Your bid must be higher than the current bid."},
                                    status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({"error": "Item is not active or auction has ended."},
                                status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

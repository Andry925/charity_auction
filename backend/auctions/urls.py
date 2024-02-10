from django.urls import path
from .views import (
    CategoryListView,
    ItemListView,
    BidListView,
    CreateBidView,
    EditAuctionAPIView,
    LatestItemsListAPIView,
    CreateAuctionAPIView,
    APIRootView,
)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/', APIRootView.as_view(), name='api-root'),
    path('api/categories/', CategoryListView.as_view(), name='category-list'),
    path('api/items/', ItemListView.as_view(), name='item-list'),
    path('api/bids/', BidListView.as_view(), name='bid-list'),
    path('api/items/<int:item_id>/bid/', CreateBidView.as_view(), name='create-bid'),
    path('api/latest-items/', LatestItemsListAPIView.as_view(), name='latest-items'),
    path('api/create-auction/', CreateAuctionAPIView.as_view(), name='create-auction'),
    path('api/edit-auction/<int:pk>/', EditAuctionAPIView.as_view(), name='edit-auction'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views
from django.contrib import admin

urlpatterns = [
    path('categories/', views.CategoryListView.as_view(), name='category-list'),
    path('items/', views.ItemListView.as_view(), name='item-list'),
    path('bids/', views.BidListView.as_view(), name='bid-list'),
    path('items/<int:item_id>/bid/', views.CreateBidView.as_view(), name='create-bid'),
    path('latest-items/', views.LatestItemsListAPIView.as_view(), name='latest-items'),
    path('create-auction/', views.CreateAuctionAPIView.as_view(), name='create-auction'),
    path('edit-auction/<int:pk>/', views.EditAuctionAPIView.as_view(), name='edit-auction'),
    path('', views.api_root, name='api-root'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

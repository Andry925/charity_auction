from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.CategoryListView.as_view(), name='category-list'),
    path('items/', views.ItemListView.as_view(), name='item-list'),
    path('bids/', views.BidListView.as_view(), name='bid-list'),
    path('items/<int:item_id>/bid/', views.CreateBidView.as_view(), name='create-bid'),
    path('latest-items/', views.LatestItemsListAPIView.as_view(), name='latest-items'),
    path('create-auction/', views.CreateAuctionAPIView.as_view(), name='create-auction'),
    path('edit-auction/<int:pk>/', views.EditAuctionAPIView.as_view(), name='edit-auction'),
    path('', views.api_root, name='api-root'),
]

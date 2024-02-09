from django.urls import path, include, re_path
from django.views.generic import RedirectView
from .views import CategoryListView, ItemListView, BidListView, CreateBidView, home_view, auction_list
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.CategoryListView.as_view(), name='category-list'),
    path('items/', views.ItemListView.as_view(), name='item-list'),
    path('bids/', views.BidListView.as_view(), name='bid-list'),
    path('items/<int:item_id>/bid/', views.CreateBidView.as_view(), name='create-bid'),
    path('', home_view, name='home'),
    path('auctions/', auction_list, name='auction_list'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


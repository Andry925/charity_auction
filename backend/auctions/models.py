from django.db import models
from django.conf import settings

class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Item(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    starting_bid = models.DecimalField(max_digits=9, decimal_places=2)
    current_bid = models.DecimalField(max_digits=9, decimal_places=2, null=True, blank=True)
    image_url = models.ImageField(upload_to='items/')
    category = models.ForeignKey(Category, related_name='items', on_delete=models.CASCADE)
    end_time = models.DateTimeField()
    is_active = models.BooleanField(default=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='items')
    def __str__(self):
        return self.title

class Bid(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='bids')
    bidder = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='bids')
    bid_amount = models.DecimalField(max_digits=9, decimal_places=2)
    bid_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.bidder.username} bids on {self.item.title}"

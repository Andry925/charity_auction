from django.test import TestCase
from .models import Item

class AuctionTestCase(TestCase):
    def setUp(self):
        # Setup run before every test method.
        Item.objects.create(title="Test Auction", description="This is a test auction.", starting_bid=10.00, current_bid=10.00, end_time="2024-12-31 23:59:59")

    def test_auction_creation(self):
        """Auctions are correctly identified with a title"""
        test_auction = Item.objects.get(title="Test Auction")
        self.assertEqual(test_auction.description, "This is a test auction.")


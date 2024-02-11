import random
from django.core.management.base import BaseCommand
from django.utils import timezone
from django.contrib.auth.models import User
from faker import Faker
from backend.auctions.models import Category, Item, Bid

class Command(BaseCommand):
    help = 'Populates the database with test data'

    def add_arguments(self, parser):
        parser.add_argument('-c', '--categories', type=int, help='Number of categories to create')
        parser.add_argument('-i', '--items', type=int, help='Number of items to create')
        parser.add_argument('-b', '--bids', type=int, help='Number of bids to create')
        parser.add_argument('-u', '--users', type=int, help='Number of users to create')

    def handle(self, *args, **options):
        fake = Faker()

        num_categories = options.get('categories', 10)
        num_items = options.get('items', 50)
        num_bids = options.get('bids', 100)
        num_users = options.get('users', 10)

        self.stdout.write('Creating test data...')

        for _ in range(num_categories):
            Category.objects.create(name=fake.word())

        for _ in range(num_users):
            User.objects.create_user(
                username=fake.user_name(),
                email=fake.email(),
                password=fake.password()
            )

        categories = list(Category.objects.all())
        users = list(User.objects.all())

        for _ in range(num_items):
            Item.objects.create(
                name=fake.word(),
                description=fake.text(),
                start_time=timezone.now(),
                end_time=timezone.now() + timezone.timedelta(days=random.randint(1, 10)),
                category=random.choice(categories),
                is_active=True
            )

        items = list(Item.objects.all())

        for _ in range(num_bids):
            Bid.objects.create(
                amount=random.uniform(1.0, 100.0),
                item=random.choice(items),
                bidder=random.choice(users)
            )

        self.stdout.write(self.style.SUCCESS('Test data created successfully!'))

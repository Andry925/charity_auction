# Generated by Django 5.0.2 on 2024-02-09 07:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auctions', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='image_url',
            field=models.ImageField(upload_to='media/'),
        ),
    ]

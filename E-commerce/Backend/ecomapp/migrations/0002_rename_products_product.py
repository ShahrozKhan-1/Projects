# Generated by Django 5.1.3 on 2024-11-21 11:10

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ecomapp', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Products',
            new_name='Product',
        ),
    ]

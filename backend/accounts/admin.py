<<<<<<< HEAD
from django.contrib.auth.admin import UserAdmin
from django.contrib import admin
from .models import User


class CustomUserAdmin(UserAdmin):
    list_display = (
        "username",
        "email",
        "password",
        "is_staff",
        "is_superuser")
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()


admin.site.register(User, CustomUserAdmin)
=======
from django.contrib import admin

# Register your models here.
>>>>>>> main

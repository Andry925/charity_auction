from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin
from django.urls import include, path
from django.views.generic import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('accounts.urls')),
    path('api/', include('auctions.urls')),
    path('', RedirectView.as_view(url='/api/', permanent=False)),  # Додано перенаправлення з кореня на 'api/'
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

from django.conf.urls import patterns, include, url
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', include('index.urls')),
    url(r'^account/', include('account.urls')),
    url(r'', include('social_auth.urls')),
)

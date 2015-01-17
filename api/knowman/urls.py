from django.conf.urls import url, include
from rest_framework import routers
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', include('index.urls', namespace='index')),
    url(r'^account/', include('account.urls', namespace='account')),
    url(r'', include('social_auth.urls')),
    url(r'^api/', include('rest_framework.urls', namespace='rest_framework'))
]

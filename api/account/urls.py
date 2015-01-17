from rest_framework import routers
from django.conf.urls import url, include
import views

urlpatterns = [
	url(r'^logout/$', views.logout, name='logout'),
	url(r'^$', views.AccountListCreateView.as_view(),name='list_create'),
	url(r'^(?P<pk>\d+)/$', views.AccountRUDView.as_view(), name='rud')
]
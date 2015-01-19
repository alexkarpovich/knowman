from rest_framework import routers
from django.conf.urls import url, include
import views

urlpatterns = [
	url(r'^logout/$', views.logout, name='logout'),
	url(r'^$', views.AccountListCreateView.as_view(),name='list-create'),
	url(r'^(?P<pk>\d+)/$', views.AccountRUDView.as_view(), name='rud'),
	url(r'^group/$', views.GroupListCreateView.as_view(), name='group-list-create'),
	url(r'^group/(?P<pk>\d+)/$', views.GroupRUDView.as_view(), name='group-rud'),
]
from django.conf.urls import patterns, include, url
import views

urlpatterns = patterns('',
	url(r'^signup/$', views.signup, name='signup'),
	url(r'^login/$', views.login, name='login'),
	url(r'^profile/$', views.profile, name='profile'),
	url(r'^logout/$', views.logout, name='logout'),
	url(r'^list/', views.AccountListView.as_view(), name='list'),
)
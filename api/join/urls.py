from django.conf.urls import patterns, include, url
import views

urlpatterns = patterns('',
	url(r'^signup/$', views.signup, name='signup'),
	url(r'^login/$', views.login, name='login'),
	url(r'^profile/$', views.profile, name='profile'),
	url(r'^logout/$', views.logout, name='logout'),
	url(r'^vk-oauth/$', views.vk_oauth, name='vk-oauth'),
	url(r'^f-oauth/$', views.f_oauth, name='f-oauth'),
)
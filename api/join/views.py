from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.core import serializers
import json
import urllib2

def signup(request):
	if request.method == 'POST':
		data = json.loads(request.body)
		userCreationForm = UserCreationForm(data)
		if userCreationForm.is_valid():
			userCreationForm.save()
			user = authenticate(username=data['username'], password=data['password2'])
			if user.is_active:
				auth_login(request, user)
				userArray = getUserArray(user)
				return JsonResponse({'user': userArray}, status=200)
			else:
				return JsonResponse({'errors': 'This account is disabled'}, status=500)
		else:
			return JsonResponse({'errors': 'Invalid login'}, status=500)


def login(request):
	if request.method == 'POST':
		data = json.loads(request.body)
		authForm = AuthenticationForm(data=data)
		if authForm.is_valid():
			user = authenticate(username=data['username'], password=data['password'])
			if user is not None:
				if user.is_active:
					if not data['rememberme']:
						request.session.set_expiry(0)
					auth_login(request, user)
					userArray = getUserArray(user)
					return JsonResponse({'user': userArray}, status=200)
				else:
					return JsonResponse({'errors': 'This account is disabled'}, status=500)
			else:
				return JsonResponse({'errors': 'Invalid login'}, status=500)
		else:
			return JsonResponse({'errors': 'Invalid username or password'}, status=500)


def logout(request):
	if request.method == 'POST':
		auth_logout(request)
		return JsonResponse({}, status=200)


def profile(request):
	print 'profile'


def getUserArray(userModel):
	baseData = serializers.serialize('json', [userModel])
	dataArray = json.loads(baseData)
	userData = dataArray[0]['fields']

	return userData


def vk_oauth(request):
	if request.method == 'GET':
		APP_ID = "4717709"
		APP_SECRET = "xUZgwnFYj6LmkkCH9nhc"
		CODE = request.GET.get('code', None)
		REDIRECT_URI = 'http://knowman.dev:8000/join/vk-oauth/'

		url = "https://oauth.vk.com/access_token?"\
				"client_id="+APP_ID+"&"\
				"client_secret="+APP_SECRET+"&"\
				"code="+CODE+"&"\
				"redirect_uri="+REDIRECT_URI;

		req = urllib2.Request(url)
		res = urllib2.urlopen(req)
		vk_res = json.loads(res.read())
		print vk_res
		return HttpResponse(vk_res)


def f_oauth(request):
	print request
	if request.method == 'GET':
		CLIENT_ID = "1554099281496049"
		REDIRECT_URI = "http://knowman.dev:8000/join/f-oauth/"
		CLIENT_SECRET = "02a8bff728d4f23dcb2b5c75c0ea9d59"
		CODE = request.GET.get('code', None)

		url = "https://graph.facebook.com/oauth/access_token?" \
			  "client_id="+CLIENT_ID+"&" \
			  "redirect_uri="+REDIRECT_URI+"&" \
			  "client_secret="+CLIENT_SECRET+"&" \
			  "code="+CODE

		req = urllib2.Request(url)
		res = urllib2.urlopen(req)
		print res.read();
		f_res = res.read();
		f_res
		return HttpResponse(f_res)
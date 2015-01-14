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

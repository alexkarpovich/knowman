from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm

def signup(request):
	if request.method == 'POST':
		print request.POST
		signupForm = UserCreationForm(request.POST)
		print signupForm
		signupForm.save()
	return HttpResponse('Hello')

def login(request):
	if request.method == 'POST':
		print request.POST
		#userCreationForm = UserCreationForm(request.POST)
	return HttpResponse('Hello')

def logout(request):
	print 'logout'

def profile(request):
	print 'profile'
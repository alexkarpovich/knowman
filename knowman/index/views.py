from django.shortcuts import render
from django.core.context_processors import csrf

def index(request):
	cont_vars = {}.update(csrf(request))
	return render(request, 'index/layout.html', cont_vars)

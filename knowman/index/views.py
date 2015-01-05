from django.shortcuts import render
from django.core import serializers
import json
from django.core.context_processors import csrf

def index(request):
	if not request.user.is_anonymous():
		currentUser = getUserArray(request.user)
	else:
		currentUser = '{}'
	cont_vars = {
		'currentUser': currentUser
	}
	cont_vars.update(csrf(request))
	return render(request, 'index/layout.html', cont_vars)

def getUserArray(userModel):
	baseData = serializers.serialize('json', [userModel])
	dataArray = json.loads(baseData)
	userData = dataArray[0]['fields']

	return json.dumps(userData)
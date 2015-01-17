from django.shortcuts import render
from django.core.context_processors import csrf
import json
from base.serializers import UserSerializer


def index(request):
	if not request.user.is_anonymous():
		serializedUser = UserSerializer(request.user)
		currentUser = json.dumps(serializedUser.data)
	else:
		currentUser = 'null'
	cont_vars = {
		'currentUser': currentUser
	}
	cont_vars.update(csrf(request))
	return render(request, 'index/layout.html', cont_vars)

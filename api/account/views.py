from django.contrib.auth.models import User, Group
from django.http import JsonResponse
from rest_framework import viewsets
from django.contrib.auth import logout as auth_logout
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from base.serializers import UserSerializer, GroupSerializer
from base.views import BaseListCreateView


def logout(request):
    if request.method == 'POST':
        auth_logout(request)
    return JsonResponse({}, status=200)


class AccountListCreateView(BaseListCreateView):
    model = User
    queryset = User.objects.all()
    serializer_class = UserSerializer


class AccountRUDView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

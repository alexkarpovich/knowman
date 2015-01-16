from django.http import JsonResponse
from django.core import serializers
from django.contrib.auth.models import User
from django.db.models.query import QuerySet
import json


class JSONResponseMixin(object):
    def render_to_json_response(self, context, **response_kwargs):
        data = getArray(context)
        return JsonResponse(
            data,
            **response_kwargs
        )

    def get_data(self, context):
        return context


def getArray(context):
    result = {}
    for key, value in context.iteritems():
        if type(value) == 'list' or type(value) == 'dict' or type(value) == QuerySet:
            value = serializers.serialize('json', value)
            result.update({key:json.loads(value)})
        elif type(value) == User:
            baseData = serializers.serialize('json', [value])
            dataArray = json.loads(baseData)
            userData = dataArray[0]['fields']
            userData.update({'id': dataArray[0]['pk']})
            result.update(userData)
        else:
            result.update({key: value})
    return result

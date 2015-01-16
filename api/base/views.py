from django.http import JsonResponse
from django.core import serializers
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
    result = {u'object_list':[]}
    for model in context['object_list']:
        baseData = serializers.serialize('json', [model])
        dataArray = json.loads(baseData)
        userData = dataArray[0]['fields']
        userData.update({'id':dataArray[0]['pk']})
        result[u'object_list'].append(userData)

    return result

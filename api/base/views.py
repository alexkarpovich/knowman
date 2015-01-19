from rest_framework.generics import ListCreateAPIView


class BaseListCreateView(ListCreateAPIView):
    model = None
    paginate_by = 7
    def get_queryset(self):
        sort_by = self.request.GET.get('sort_by')
        count = self.request.GET.get('count')
        if count:
            self.paginate_by = count
        fields = self.model._meta.get_all_field_names()
        sort_by = 'id' if sort_by not in fields else sort_by
        qs = super(BaseListCreateView,self).get_queryset().order_by(sort_by)
        return qs


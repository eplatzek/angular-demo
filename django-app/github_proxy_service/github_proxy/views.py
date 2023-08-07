import requests
from rest_framework.views import APIView
from rest_framework.response import Response

class GitHubProxyView(APIView):
    base_url = 'https://api.github.com/repos/d3/d3/issues'

    def get(self, request, *args, **kwargs):
        query_params = request.query_params
        response = requests.get(self.base_url, params=query_params, *args, **kwargs)
        return Response(response.json())

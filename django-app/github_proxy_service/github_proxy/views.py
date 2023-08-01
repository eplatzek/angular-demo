import requests
from rest_framework.views import APIView
from rest_framework.response import Response

class GitHubProxyView(APIView):
    base_url = 'https://api.github.com/repos/d3/d3/issues'

    def get(self, request, *args, **kwargs):
        response = requests.get(self.base_url)
        return Response(response.json())

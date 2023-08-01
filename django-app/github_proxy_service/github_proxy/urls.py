from django.urls import path
from .views import GitHubProxyView

urlpatterns = [
    path('proxy/d3-d3-issues/', GitHubProxyView.as_view(), name='github-proxy'),
]





from django.urls import path
from first.views import index, post, detail

urlpatterns = [
    path('', index, name='index'),
    path('post/', post, name='post'),
    path('detail/<int:pk>/', detail, name='detail'),
]

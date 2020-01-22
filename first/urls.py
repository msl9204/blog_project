from django.urls import path
from first.views import index, post, detail, oauth, login

urlpatterns = [
    path('', index, name='index'),
    path('post/', post, name='post'),
    path('detail/<int:pk>/', detail, name='detail'),
    path('oauth/', oauth, name='oauth'),
    path('login-processing/', login, name='login'),
]

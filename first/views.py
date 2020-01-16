from django.shortcuts import render

def index(request):
    return render(request, 'first/index.html')

def post(request):
    return render(request, 'first/all_project.html')
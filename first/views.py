from django.shortcuts import render, get_object_or_404
from first.models import Article




def index(request):
    return render(request, 'first/index.html')

def post(request):
    art_list = Article.objects.all()
    return render(request, 'first/all_project.html', {'art_list' : art_list})

def detail(request, pk):
    art_detail = get_object_or_404(Article, pk=pk)

    return render(request, 'first/detail.html', { 'art' : art_detail })
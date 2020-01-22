from django.shortcuts import render, get_object_or_404
from django.shortcuts import redirect
from first.models import Article
import requests

def login(request):

    login_request_uri = 'https://kauth.kakao.com/oauth/authorize?';
    client_id = 'a1e3205130efecbd1983f366b00e9871';
    redirect_uri = 'http://127.0.0.1:8000/oauth';
 
    login_request_uri += 'client_id=' + client_id
    login_request_uri += '&redirect_uri=' + redirect_uri
    login_request_uri += '&response_type=code&scope=talk_message'

    request.session['client_id'] = client_id
    request.session['redirect_uri'] = redirect_uri


    return redirect(login_request_uri)

def index(request):
    return render(request, 'first/index.html')

def post(request):
    art_list = Article.objects.all()
    return render(request, 'first/all_project.html', {'art_list' : art_list})

def detail(request, pk):
    art_detail = get_object_or_404(Article, pk=pk)

    return render(request, 'first/detail.html', { 'art' : art_detail })

def oauth(request):
    code = request.GET['code']
    print('code = ' + str(code))

    client_id = request.session.get('client_id')
    redirect_uri = request.session.get('redirect_uri')

    access_token_request_uri = "https://kauth.kakao.com/oauth/token?grant_type=authorization_code&"
 
    access_token_request_uri += "client_id=" + client_id
    access_token_request_uri += "&redirect_uri=" + redirect_uri
    access_token_request_uri += "&code=" + code
 
    print(access_token_request_uri)

    access_token_request_uri_data = requests.get(access_token_request_uri)
    json_data = access_token_request_uri_data.json()
    access_token = json_data['access_token']
    print(access_token)


    user_profile_info_uri = "https://kapi.kakao.com/v1/api/talk/profile?access_token="
    user_profile_info_uri += str(access_token)
 
    user_profile_info_uri_data = requests.get(user_profile_info_uri)
    user_json_data = user_profile_info_uri_data.json()
    nickName = user_json_data['nickName']
    profileImageURL = user_json_data['profileImageURL']
    thumbnailURL = user_json_data['thumbnailURL']
 
    print("nickName = " + str(nickName))
    print("profileImageURL = " + str(profileImageURL))
    print("thumbnailURL = " + str(thumbnailURL))



    return redirect('index')
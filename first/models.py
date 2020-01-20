from django.db import models
import requests

def md_to_gfm(content):
    url = "https://api.github.com/markdown/raw"
    headers = {'Content-Type' : 'text/plain; charset=utf-8'}
    data = content.encode('utf-8')
    req = requests.post(url, headers=headers, data=data)

    return req.text.encode('utf-8').decode('utf-8')




class Article(models.Model):
    title = models.CharField(max_length=50)
    date = models.DateTimeField()
    content = models.TextField()

    def __str__(self):
        return self.title

    def gfm(self):
        return md_to_gfm(self.content)

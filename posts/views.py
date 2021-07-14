from django.shortcuts import render
from .models import Post


def home_view(request):
    qs = Post.objects.all()
    context = {
        'hello': 'hello world',
        'qs': qs,

    }
    return render(request, 'posts/main.html', context)

from django.urls import path

from . import views

app_name='scraper'

urlpatterns = [
    path('', views.home, name='home'),
    path('generate/', views.generate_download_link, name='generate'),
]


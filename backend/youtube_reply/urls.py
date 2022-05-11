from django.urls import path
from . import views

urlpatterns = [
    path('reply/', views.user_replies)
    ]
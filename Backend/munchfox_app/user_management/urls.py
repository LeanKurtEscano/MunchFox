from django.urls import path
from . import views
urlpatterns = [
    path('login/',views.user_login, name="user_login"),
    path('signup/',views.user_signup, name="user_signup"),
    path('google-signin/',views.google_login, name="google_login")
]

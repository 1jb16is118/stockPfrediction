
from django.urls import path
from account import views as Userviews
from . import views
urlpatterns = [
    path("",views.Testing),
    path('register/',Userviews.RegisterView.as_view())

]
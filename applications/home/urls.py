from django.contrib import admin
from django.urls import path
from django.views.generic.edit import CreateView
from . import views

urlpatterns = [
    path('prueba/', views.PruebaView.as_view()),  
    path('lista/', views.PruebaListView.as_view()),  
    path('listabdd/', views.ListarPrueba.as_view()),
    path('add/',  views.PruebaCreateView.as_view()),
    # reutilizando la url anterior
    path('adds/',  views.PruebaCreateView.as_view(), name = 'prueba_add'),
]

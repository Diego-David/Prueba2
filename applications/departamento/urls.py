
from django.contrib import admin
from django.urls import path

from . import views
app_name="departamento_app"
urlpatterns = [
    path('Newdepartamento/', views.NewDepartamentoView.as_view(), name='nuevo_departamento'),  
    path('lista_departamento/', views.DepartamentoListView.as_view(), name='departamento_list'),
]

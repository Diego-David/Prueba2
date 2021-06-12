from django.contrib import admin
from django.urls import path

from . import views
app_name = "persona_app"

urlpatterns = [
    path('', views.InicioView.as_view(), name = 'inicio'),
    path('listar_empleados/', views.ListaAllEmpleados.as_view(), name='empleados_all'), 
    path('listar_empleados_area/<namev>/', views.ListByAreaEmpleado.as_view(), name="empleados_area"), 
    path('listar_empleados_admin/', views.ListaEmpleadosAdmin.as_view(), name="empleados_admin"), 

    path('kword_empleados/', views.ListEmpleadosByKword.as_view()),
    path('listar_habilidades_empleados/', views.ListHabilidadesEmpleados.as_view()),
    path('detail_empleados/<pk>/', views.EmpleadoDetailView.as_view(), name="empleado_detail"),
    path('createview_empleados/', views.EmpleadoCreateView.as_view(), name="create_empleado"),
    path('succes/', views.SuccesView.as_view(), name='correcto'),

    path('update_view/<pk>/', views.EmpleadoUpdateView.as_view(), name='empleado_update'),
    path('succes_update/', views.SuccesView.as_view(), name='correcto_update'),
    path('delete_view/<pk>/', views.EmpleadoDeleteView.as_view(), name='delete_empleado'),
    path('succes_update/', views.SuccesViewDelete.as_view(), name='correcto_delete'),
   
]

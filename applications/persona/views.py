from applications.persona.forms import EmpleadoForm
from applications import departamento
from applications.departamento.models import Departamento
from django.shortcuts import render
from django.views.generic import (ListView, DetailView, 
    CreateView,
    TemplateView,
    UpdateView,
    DeleteView
    )
from django.urls import reverse_lazy

# forms
from .models import Empleado
# Create your views here.

"""
# QUEREMOS CREAR 5 VISTAS:
# 1.- LISTAR TODOS LOS EMPLEADOS DE LA EMPRESA
"""

# Importamos los modelos con los que vamos a trabajar 
from .models import Empleado, Habilidades

class InicioView(TemplateView):
    """ vista de la pag de INICIO """
    template_name = 'inicio.html'


class ListaAllEmpleados(ListView):
    template_name = 'persona/list_all.html'

   
    paginate_by = 4      #  <=========PARA HACER LA PAGINACIÓN
    ordering = 'id'
    # model = Empleado
    def get_queryset(self):
        print('*************')
        palabra_clave = self.request.GET.get("kword", '')
        lista = Empleado.objects.filter(
            
            first_name__icontains = palabra_clave
            
        )
        print('Lista resultado: ', lista)
        return lista


class ListaEmpleadosAdmin(ListView):
    template_name = 'persona/lista_empleados.html'

   
    paginate_by = 10      #  <=========PARA HACER LA PAGINACIÓN
    ordering = 'id'
    context_object_name = 'empleados'
    model = Empleado
    


"""
# 2.- QUEREMOS LISTAR A TODOS LOS EMPLEADOS QUE PERTENECEN A UN ÁREA DE LA EMPRESA
"""
class ListByAreaEmpleado(ListView):
    template_name = 'persona/list_emple_area.html'
    context_object_name = 'empleados'
    """    
    queryset = Empleado.objects.filter(
        departamento__name = 'Gerente General'
    )
    """
    # oTRA FORMA DE HACER LOS FILTORS PARA MOSTRAR EN EL FORMULARIO:
    def get_queryset(self):
        area = self.kwargs['namev']
        lista = Empleado.objects.filter(
            departamento__shor_name = area
        )
        return lista


"""
# 3.- QUEREMOS LISTAR A LOS EMPLEADOS ingresando una PALABRA CLAVE
"""
class ListEmpleadosByKword(ListView):
    template_name = 'persona/by_kword.html'
    context_object_name = 'empleados'

    def get_queryset(self):
        print('*************')
        palabra_clave = self.request.GET.get("kword", '')
        lista = Empleado.objects.filter(
            first_name = palabra_clave
        )
        print('Lista resultado: ', lista)
        return lista



"""
# 4.- QUEREMOS LISTAR las HABILIDADES
"""
class ListHabilidadesEmpleados(ListView):
    template_name = 'persona/habilidades.html'
    context_object_name = 'habilidades_object'
    """
    def get_queryset(self):
        empleado = Empleado.objects.get(id=1)
        #print(empleado.habilidades.all())
        return empleado.habilidades.all()
    """
    def get_queryset(self):
        print("==============++++++++++++++")
        clave_habilidad = self.request.GET.get("habilidad", '')
        list_habilidad = Habilidades.objects.filter(
            habilidad = clave_habilidad
        )
        print ("=======================================================", type (id))
        return list_habilidad
       

class EmpleadoDetailView(DetailView):
    model = Empleado
    template_name = "persona/detail_empleado.html"
   
    def get_context_data(self, **kwargs):
        context = super(EmpleadoDetailView, self).get_context_data(**kwargs)
        context['titulo']='Empleado del mes'
        return context

        


class SuccesView(TemplateView):
    template_name = "persona/succes.html"


class EmpleadoCreateView(CreateView):
    model = Empleado
    template_name = "persona/createview_registrarPer.html"
    # fields = ['first_name', 'last_name', 'job', 'habilidades'] # Así llamo a los que quiera
    # fields = ('__all__')  # así llamo a todos los campos para mostrar en el FORM
    form_class = EmpleadoForm
    success_url = reverse_lazy('persona_app:empleados_admin')


class EmpleadoUpdateView(UpdateView):
    model = Empleado
    template_name = "persona/persona_update.html"
    fields = ['first_name',
        'last_name',
        'job', 
        'departamento',
        'habilidades'
    ]
    success_url = reverse_lazy('persona_app:empleados_admin')

class SuccesViewDelete(TemplateView):
    template_name = "persona/successdelete.html"

class EmpleadoDeleteView(DeleteView):
    model = Empleado
    template_name = "persona/deleteview.html"
    success_url = reverse_lazy('persona_app:empleados_admin')


  

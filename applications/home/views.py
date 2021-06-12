from applications.home.models import Prueba
from django.shortcuts import render
#EJEMPLO
from django.views.generic import TemplateView, ListView,CreateView


from .forms import PruebaForm    # =====> PARA EL FORMS.PY


#DEBEMOS IMPORTAR LOS MODELOS OJITOOO
from .models import Prueba

class PruebaView(TemplateView):
    template_name = 'home/prueba.html'


class PruebaListView(ListView):
    template_name = "home/lista.html"
    context_object_name = 'listaNumeros'
    queryset = ['1', '2', '45']

class ListarPrueba(ListView):
    template_name = "home/lista_prueba.html"
    model = Prueba
    context_object_name = 'lista'


class PruebaCreateView(CreateView):
    template_name = "home/add.html"
    model = Prueba
    fields = ['titulo', 'subtitulo', 'cantidad']

# vista para utilizar el form.py
# ASÍ SE TENÍA EN UN INICIO :

"""
class PruebaCreateView(CreateView):
    template_name = "home/add.html"
    model = Prueba
    fields = ['titulo', 'subtitulo', 'cantidad']
    success_url ='/'
"""  
# Y ASÍ SE REEEMPLAZA EL FIELDS
class PruebaCreateView(CreateView):
    template_name = "home/add.html"
    model = Prueba
    form_class = PruebaForm
    success_url ='/'
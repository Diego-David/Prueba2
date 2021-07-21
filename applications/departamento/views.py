from django.shortcuts import render

from django.views.generic.edit import FormView
from django.views.generic.list import ListView  # => con esto heredamos un form para ingresar datos en dos o más modelos

from .forms import NewDepartamentoView

from applications.persona.models import Empleado # ====> AQUI estoy recuperando los datos del modelo Empleado
from .models import Departamento

class DepartamentoListView (ListView):
    model = Departamento
    template_name = "departamento/lista.html"
    context_object_name = 'departamentos'

class NewDepartamentoView(FormView):
    template_name = 'departamento/formdoblemodel.html'
    form_class = NewDepartamentoView
    success_url = '/'

    def form_valid(self, form):
        print("===============EEEO")
        #===========================================================
        # instanticia del modelo departamento por laclave foranea
        depa = Departamento(
            name = form.cleaned_data['departamento'],
            shor_name = form.cleaned_data['shorname']
        )
        depa.save()
        #===========================================================
        nombre = form.cleaned_data['nombre'] # ====> AQUI estoy recuperando los datos del modelo Empleado
        apellido = form.cleaned_data['apellidos'] # ====> AQUI estoy recuperando los datos del modelo Empleado
        Empleado.objects.create(
            first_name = nombre,
            last_name = apellido,
            #job = '1',
            departamento = depa


        )
        return super(NewDepartamentoView, self).form_valid(form)



# Create your views here.

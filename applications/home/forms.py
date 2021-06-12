from django import forms
from django.forms import fields
from django.forms import widgets
from django.forms.widgets import Widget  # =====> PARA EL FORMS.PY

from .models import Prueba  # =====> PARA EL FORMS.PY
class PruebaForm(forms.ModelForm):
    """Form definition for Prueba."""

    class Meta:
        """Meta definition for Pruebaform."""

        model = Prueba

        # fields = ('__all__')

        fields = (
            'titulo',
            'subtitulo',
            'cantidad',
        )
        # ojo con la sangría // sirve para personalizar el formulario, PONER PLACEHOLDER, etc => ORM
        widgets = {
            'titulo': forms.TextInput(
                attrs = {
                    'placeholder': 'INGRESE EL TÍTULO'
                }
            )
        }

    # para validar datos que ingresan en el parámetro cantidad // ojo a la altura de la class  NO DEL MODEL PRUEBA
    def clean_cantidad(self):
        cantidad = self.cleaned_data['cantidad'] # así recupero el valor en la variable "cantidad = " ojo
        if cantidad < 10: # condición para romper el envío hasta que ingrese bien
            raise forms.ValidationError('Solo números mayores a 10')
                
        return cantidad # si ingresa el valor bien, retorna la cantidad sin problema

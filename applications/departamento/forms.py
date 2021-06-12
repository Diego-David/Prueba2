from django import forms

class NewDepartamentoView(forms.Form):
    nombre = forms.CharField(max_length=50)
    apellidos = forms.CharField(max_length=50, required=True)
    departamento = forms.CharField(max_length=50, required=True)
    shorname = forms.CharField(max_length=20, required=True)
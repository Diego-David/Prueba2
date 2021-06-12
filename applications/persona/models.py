# Para el ejemplo del CKEditor
#from ckeditor.fields import RichTextField

from django.db import models
#IMPORTAR PARA HACER FOREIGN KEY
from applications.departamento.models import Departamento
# Create your models here.



class Habilidades(models.Model):
    habilidad = models.CharField('Habilidad', max_length=50)

    class Meta:
        verbose_name = 'Habilidad'
        verbose_name_plural = 'Habilidades Empleados'

    def __str__(self):
        return str(self.id) + '-' + self.habilidad

"""
Contador
Administrador
Economista
Otro
"""

class Empleado(models.Model):

    JOB_CHOICES =(
        ('0', 'CONTADOR'),
        ('1', 'ADMINISTRADOR'),
        ('2', 'ECONOMISTA'),
        ('3', 'OTRO'),
    )

    first_name = models.CharField('Nombre', max_length=60)
    last_name = models.CharField('Apellidos', max_length=60)
    job = models.CharField('Trabajo', max_length=1, choices=JOB_CHOICES)
    departamento = models.ForeignKey(Departamento, on_delete=models.CASCADE) # djanerio=> fk =>relación 1-M
    avatar = models.ImageField(upload_to='empleado', blank=True, null=True)
    habilidades = models.ManyToManyField(Habilidades)       #relación M-M // djaneiro=>m2m
    # PARAEL EJEMPLO DE CKEditor
    # hoja_vida = RichTextField()
    

    class Meta:
        verbose_name = 'Mi empleado'
        verbose_name_plural = 'Empleados de la empresa'
        ordering = ['-first_name', 'last_name']
        unique_together = ('first_name', 'departamento')


    def __str__(self):
        return str(self.id) + ' - ' + self.first_name + ' - ' + self.last_name

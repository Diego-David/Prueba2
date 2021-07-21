from django.contrib import admin
from .models import Empleado
# Register your models here.

#admin.site.register(Habilidades)

class EmpleadoAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'first_name',
        'last_name',
        'departamento',
        'full_name',
    )

    def full_name(self, obj):
        # Aquí va todas las operaciones que se necesite
        print(obj.first_name)
        return obj.first_name + ' ' +  obj.last_name

    search_fields = ('first_name',)
    list_filter = ('departamento', )

    #
    #filter_horizontal = ('habilidades',)  #SOLO FUNCIONA CON LA RELACIÓN m-m



admin.site.register(Empleado, EmpleadoAdmin)
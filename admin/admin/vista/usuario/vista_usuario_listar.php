<script type="text/javascript" src="../js/usuario.js?rev=<?php echo time(); ?>"></script>
<div class="col-md-12">
  <div class="box box-warning box-solid">
    <div class="box-header with-border">
      <h3 class="box-title">BIENVENIDO AL CONTENIDO DE USUARIOS</h3>

      <div class="box-tools pull-right">
        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
        </button>
      </div>
    </div>
    <div class="box-body">
      <div class="form-group">
        <div class="col-lg-10">
          <div class="input-group">
            <input type="text" class="global_filter form-control" id="global_filter" placeholder="Ingresar dato a buscar">
            <span class="input-group-addon"><i class="fa fa-search"></i></span>
          </div>
        </div>
        <div class="col-lg-2">
          <button class="btn btn-danger" style="width:100%" onclick="AbrirModalRegistro();idUsu()"><i class="glyphicon glyphicon-plus"></i>Nuevo Registro</button>
        </div>
      </div>
      <table id="tabla_usuario" class="display responsive nowrap" style="width: 100%;">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Usuario</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Accion</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</div>
<form autocomplete="false" onsubmit="return false">
  <div class="modal fade" id="modal_registro" role="dialog">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><b>Registro De Usuario</b></h4>
        </div>
        <div class="modal-body">
          <div class="col-lg-12">
            <input type="text" class="form-control" id="id_usu" placeholder=""><br>
          </div>
          <div class="col-lg-12">
            <label for="">Nombres</label>
            <input type="text" class="form-control" id="txt_nom" placeholder="Ingrese los nombres"><br>
          </div>
          <div class="col-lg-12">
            <label for="">Apellidos</label>
            <input type="text" class="form-control" id="txt_ape" placeholder="Ingrese los apellidos"><br>
          </div>
          <div class="col-lg-12">
            <label for="">Correo Electronico</label>
            <input type="text" class="form-control" id="txt_ce" placeholder="Ingrese el correo electronico"><br>
          </div>
          <div class="col-lg-12">
            <label for="">Usuario</label>
            <input type="text" class="form-control" id="txt_usu" placeholder="Ingrese el usuario"><br>
          </div>
          <div class="col-lg-12">
            <label for="">Contraseña</label>
            <input type="password" class="form-control" id="txt_con1" placeholder="Ingrese la contraseña"><br>
          </div>
          <div class="col-lg-12">
            <label for="">Repita la Contraseña</label>
            <input type="password" class="form-control" id="txt_con2" placeholder="Ingrese la contraseña nuevamente"><br>
          </div>
          <div class="col-lg-12">
            <label for="">Rol</label>
            <select class="js-example-basic-single" name="state" id="cbm_rol" style="width: 100%;">
            </select><br><br>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" onclick="Registrar_Usuario()"><i class="fa fa-check"><b>&nbsp;Registrar</b></i></button>
          <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fa fa-close"><b>&nbsp;Cerrar</b></i></button>
        </div>
      </div>
    </div>
  </div>
</form>

<form autocomplete="false" onsubmit="return false">
  <div class="modal fade" id="modal_editar" role="dialog">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><b>Editar Datos del Usuario</b></h4>
        </div>
        <div class="modal-body">
          <div class="col-lg-12">
            <input type="text" id="txtidusuario" hidden>
            <label for="">Nombres</label>
            <input type="text" class="form-control" id="txtnom_editar" placeholder="Ingrese los nombres"><br>
          </div>
          <div class="col-lg-12">
            <label for="">Apellidos</label>
            <input type="text" class="form-control" id="txtape_editar" placeholder="Ingrese los apellidos"><br>
          </div>
          <div class="col-lg-12">
            <label for="">Correo Electronico</label>
            <input type="text" class="form-control" id="txtce_editar" placeholder="Ingrese el correo electronico"><br>
          </div>
          <div class="col-lg-12">
            <label for="">Usuario</label>
            <input type="text" class="form-control" id="txtusu_editar" placeholder="Ingrese el usuario" disabled><br>
          </div>
          <div class="col-lg-12">
            <label for="">Rol</label>
            <select class="js-example-basic-single" name="state" id="cbmrol_editar" style="width: 100%;">
            </select><br><br>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" onclick="Modificar_Usuario()"><i class="fa fa-check"><b>&nbsp;Editar</b></i></button>
          <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fa fa-close"><b>&nbsp;Cerrar</b></i></button>
        </div>
      </div>
    </div>
  </div>
</form>
<script>
  $(document).ready(function() {
    listar_usuario();
    $('.js-example-basic-single').select2();
    listar_combo_rol();
    $("#modal_registro").on('shown.bs.modal', function() {
      $("#txt_usu").focus();
    })
  });
</script>
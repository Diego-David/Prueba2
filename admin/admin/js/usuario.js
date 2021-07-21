function VerificarUsuario() {
    var usu = $('#txt_usu').val();
    var con = $('#txt_con').val();

    if (usu.length == 0 || con.length == 0) {
        return Swal.fire("Mensaje De Advertencia", "Llene los campos vacios", "warning");
    }

    $.ajax({
        url: '../controlador/usuario/controlador_verificar_usuario.php',
        type: 'POST',
        data: {
            user: usu,
            pass: con
        }
    }).done(function (resp) {
        if (resp == 0) {
            Swal.fire("Mensaje De Error", "Usuario y/o contraseña incorrecta", "error");
            //console.log(data);
        } else {
            var data = JSON.parse(resp);

            if (data[0][3] === "INACTIVO") {
                return Swal.fire("Mensaje De Error", "Usuario " + usu + " Suspendido, comuniquese con el administrador.", "warning");
            }
            $.ajax({
                url: '../controlador/usuario/controlador_crear_session.php',
                type: 'POST',
                data: {
                    idusuario: data[0][0],
                    user: data[0][1],
                    rol: data[0][4]
                }
                //Swal.fire("Mensaje De Confirmación", "Bienvenido al sistema", "success");
            }).done(function (resp) {
                let timerInterval
                Swal.fire({
                    title: 'BIEVENIDO AL SISTEMA',
                    html: 'Usted sera direccionado en <b></b> milisegundos.',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        timerInterval = setInterval(() => {
                            const content = Swal.getHtmlContainer()
                            if (content) {
                                const b = content.querySelector('b')
                                if (b) {
                                    b.textContent = Swal.getTimerLeft()
                                }
                            }
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        location.reload();
                    }
                })
            })
            //console.log(data);
        }
    })
}

var table
function listar_usuario() {
    table = $("#tabla_usuario").DataTable({
        "ordering": false,
        "paging": false,
        "searching": { "regex": true },
        "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
        "pageLength": 10,
        "destroy": true,
        "async": false,
        "processing": true,
        "ajax": {
            "url": "../controlador/usuario/controlador_usuario_listar.php",
            type: 'POST'
        },
        "columns": [
            { "data": "posicion" },
            { "data": "nombres_usu" },
            { "data": "apellidos_usu" },
            { "data": "email_usu" },
            { "data": "usuario_usu" },
            { "data": "nombre_rol" },
            {
                "data": "estado_usu",
                render: function (data, type, row) {
                    if (data == 'ACTIVO') {
                        return "<span class='label label-success'>" + data + "</span>";
                    } else {
                        return "<span class='label label-danger'>" + data + "</span>";
                    }
                }
            },
            { "defaultContent": "<button style='font-size:13px;' type='button' class='editar btn btn-primary'><i class='fa fa-edit'></i></button>&nbsp;<button style='font-size:13px;' type='button' class='desactivar btn btn-danger'><i class='fa fa-trash'></i></button>&nbsp;<button style='font-size:13px;' type='button' class='activar btn btn-success'><i class='fa fa-check'></i></button>" }
        ],

        "language": idioma_espanol,
        select: true
    });
    document.getElementById("tabla_usuario_filter").style.display = "none";
    $('input.global_filter').on('keyup click', function () {
        filterGlobal();
    });
    $('input.column_filter').on('keyup click', function () {
        filterColumn($(this).parents('tr').attr('data-column'));
    });
}

$("#tabla_usuario").on('click', '.desactivar', function () {
    var data = table.row($(this).parents('tr')).data();
    if (table.row(this).child.isShown()) {
        var data = table.row(this).data();
    }
    //console.log(data);
    Swal.fire({
        title: 'Estas seguro de desactivar al usuario?',
        text: "Una vez hecho esto el usuario no tendra acceso al sistema",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
    }).then((result) => {
        if (result.value) {
            Modificar_Estatus(data.id_usu, 'INACTIVO');
        }
    })
})

$("#tabla_usuario").on('click', '.activar', function () {
    var data = table.row($(this).parents('tr')).data();
    if (table.row(this).child.isShown()) {
        var data = table.row(this).data();
    }
    //console.log(data);
    Swal.fire({
        title: 'Estas seguro de activar al usuario?',
        text: "Una vez hecho esto el usuario tendra acceso al sistema",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
    }).then((result) => {
        if (result.value) {
            Modificar_Estatus(data.id_usu, 'ACTIVO');
        }
    })
})

function Modificar_Estatus(idusuario, estatus) {
    var mensaje = "";
    if (estatus == 'INACTIVO') {
        mensaje = "desactivo";
    } else {
        mensaje = "activo";
    }
    $.ajax({
        "url": "../controlador/usuario/controlador_modificar_estatus_usuario.php",
        type: 'POST',
        data: {
            idusuario: idusuario,
            estatus: estatus
        }
    }).done(function (resp) {
        //alert(resp);
        if (resp > 0) {
            Swal.fire("Mensaje De Confirmacion", "El usuario se " + mensaje + " con exito", "success")
                .then((value) => {
                    table.ajax.reload();
                });
        }
    })
}

$("#tabla_usuario").on('click', '.editar', function () {
    var data = table.row($(this).parents('tr')).data();
    if (table.row(this).child.isShown()) {
        var data = table.row(this).data();
    }
    //console.log(data);
    $('#modal_editar').modal({ backdrop: 'static', keyboard: false });
    $('#modal_editar').modal('show');
    $("#txtidusuario").val(data.id_usu);
    $("#txtnom_editar").val(data.nombres_usu);
    $("#txtape_editar").val(data.apellidos_usu);
    $("#txtce_editar").val(data.email_usu);
    $("#txtusu_editar").val(data.usuario_usu);
    $("#cbmrol_editar").val(data.nombre_rol).val();
})

function filterGlobal() {
    $('#tabla_usuario').DataTable().search(
        $('#global_filter').val(),
    ).draw();
}

function AbrirModalRegistro() {
    $('#modal_registro').modal({ backdrop: 'static', keyboard: false });
    $('#modal_registro').modal('show');
}

function listar_combo_rol() {
    $.ajax({
        "url": "../controlador/usuario/controlador_combo_rol_listar.php",
        type: 'POST'
    }).done(function (resp) {
        var data = JSON.parse(resp);
        var cadena = "";
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                cadena += "<option value='" + data[i][0] + "'>" + data[i][1] + "<option>";
            }
            $("#cbm_rol").html(cadena);
            $("#cbmrol_editar").html(cadena);
        } else {
            cadena += "<option value=''>NO SE ENCONTRARON REGISTROS</option>";
            $("#cbm_rol").html(cadena);
            $("#cbmrol_editar").html(cadena);
        }
    })
}

function idUsu() {
    $.ajax({
        "url": "../controlador/usuario/controlador_listar_id_usu.php",
        type: 'POST'
    }).done(function (resp) {
        var data = JSON.parse(resp);
        //console.log(data);
        var cadena = "";
        if (data.length > 0) {
            $("#id_usu").val(data[0][0]);
            $("#id_usu").hide();
        } else {
            cadena += "<option value=''>*** ERROR *** REVISA LA BD</option>";
        }
    })
}

function Registrar_Usuario() {
    var id = $("#id_usu").val();
    var nombres = $("#txt_nom").val();
    var apellidos = $("#txt_ape").val();
    var correo = $("#txt_ce").val();
    var usuario = $("#txt_usu").val();
    var password1 = $("#txt_con1").val();
    var password2 = $("#txt_con2").val();
    var rol = $("#cbm_rol").val();
    if (id.length == 0 || nombres.length == 0 || apellidos.length == 0 || correo.length == 0 || usuario.length == 0 || password1.length == 0 || password2.length == 0 || rol.length == 0) {
        return Swal.fire("Mensaje De Advertencia", "Llene los campos vacios", "warning");
    }
    if (password1 != password2) {
        return Swal.fire("Mensaje De Advertencia", "Las contraseñas deben coincidir", "warning");
    }

    $.ajax({
        "url": "../controlador/usuario/controlador_usuario_registro.php",
        type: 'POST',
        data: {
            id: id,
            nombres: nombres,
            apellidos: apellidos,
            correo: correo,
            usuario: usuario,
            contrasena: password1,
            rol: rol
        }
    }).done(function (resp) {
        //alert(resp);
        if (resp > 0) {
            if (resp == 1) {
                $("#modal_registro").modal('hide');
                Swal.fire("Mensaje De Confirmacion", "Datos correctamente, Nuevo Usuario Registrado", "success")
                    .then((value) => {
                        LimpiarRegistro();
                        table.ajax.reload();
                    });
            } else {
                Swal.fire("Mensaje De Advertencia", "Lo sentimos, el nombre del usuario ya se encuentra en nuestra base de datos", "warning");
            }
        } else {
            Swal.fire("Mensaje De Error", "Lo sentimos, no se pudo completar el registro", "error");
        }
    })
}

function LimpiarRegistro() {
    $("#txt_nom").val("");
    $("#txt_ape").val("");
    $("#txt_ce").val("");
    $("#txt_usu").val("");
    $("#txt_con1").val("");
    $("#txt_con2").val("");
}
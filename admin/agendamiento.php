<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/agentamiento.css">
    <link type="text/css" rel="stylesheet" href="./css/component-chosen.css?n=1" />
    <link type="text/css" rel="stylesheet" href="./css/component-chosen.min.css?n=1" />
    <link type="text/css" rel="stylesheet" href="./css/bootstrap.min.css?n=1" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <title>Agenta tu cita</title>
</head>

<body>
    <script type="text/javascript" src='js\validacion_cantones.js?n=1'></script>
    <script type="text/javascript" src='./js/validaciones.js?n=1'></script>
    <script src="./js/jquery-3.6.0.min.js?n=1"></script>
    <script src="./js/chosen.jquery.js?n=1" type="text/javascript"></script>
    <script type="text/javascript" src="./js/idDocumento.js?n=1"></script>



    <form action="envio.php" id="formulario" method="post" enctype="multipart/form-data">
        <fieldset>
            <h2 class="titulo">Reserva tu reunion</h2>
            <h3 class="subtitulo">
                Todos los campos marcados con (*) son obligatorios
                si no los llenas no podrás enviar el formulario.
            </h3>

            <input type="text" id="idd" name="idd" hidden>

            <!-- <p>N° Documento</p>
            <input type="text" name="idDocumento" id="idDocumento" style="background-color: #dfdfdf;"
                readonly='readonly' /> -->


            <p>(*) Nombres:</p>
            <p id="p_nombre"></p>
            <input type="text" name="nombres" placeholder="Ej. David Alexander" required />

            <p>(*) Apellidos:</p>
            <p id="p_apellidos"></p>
            <input type="text" name="apellidos" placeholder="Ej. Banda Llanganate" required />

            <p>(*) Cédula:
            <div id="salida"></div>
            </p>
            <p id="p_cedula"></p>
            <input type="text" name="cedula" placeholder="Ej. 050xxxxxxx" id="ced" onchange="validarCed()" required />

            <p>(*) Cantón:</p>
            <div class="form-group">
                <select name="Canton" id="Canton" data-placeholder="- Seleccione un cantón -" class="form-control chosenCanton" onchange="change(this.id, 'parroquia')" value="<%= typeof Canton != 'undefined' ? Canton : '' %>" required>
                    <option value=""></option>
                    <option value="La Mana">La Maná</option>
                    <option value="Latacunga">Latacunga</option>
                    <option value="Pangua">Pangua</option>
                    <option value="Pujilí">Pujilí</option>
                    <option value="Salcedo">Salcedo</option>
                    <option value="Saquisilí">Saquisilí</option>
                    <option value="Sigchos">Sigchos</option>
                </select>
            </div>

            <p>(*) Parroquias:</p>
            <div class="form-group">
                <select id="parroquia" name="Parroquia" data-placeholder="- Seleccione una parroquia -" class="form-control chosenParroquia" value="<%= typeof Parroquia != 'undefined' ? Parroquia : '' %>" required>
                    <option value=""></option>
                </select>
            </div>

            <p>(*) Barrio/Comunidad/Recinto:</p>
            <p id="p_barrio"></p>
            <input type="text" name="barrio" placeholder="Ej. Centro" required />

            <p>(*) Dirección:</p>
            <p id="p_direccion"></p>
            <input type="text" name="direccion" placeholder="Ej. Calle Juan Manuel Lasso" required />

            <p>(*) Teléfono Celular:</p>
            <p id="p_t_celular"></p>
            <input type="text" name="t_celular" id="t_celular" value="09" onchange="validarTCe()" placeholder="Ej. 09xxxxxxxx" required />

            <p>Teléfono Convencional:</p>
            <p id="p_t_convencional"></p>
            <input type="text" name="t_convencional" id="t_convencional" value="03" onchange="validarTC()" placeholder="Ej. 032xxxxxx" />

            <br>

            <p>(*) Correo Electrónico:</p>
            <p id="p_email"></p>
            <input type="email" name="email" id="email" onchange="validarCorr()" placeholder="Ej. davidbanda@hotmail.com" required />
            </div>

            <p>(*) Fecha:</p>
            <p id="p_email"></p>
            <input type="date" name="fecha" id="fecha" required />
            </div>


            <input type="submit" name="next" class="next action-button" value="Enviar" id="btnsubmit" />

            <p id="mensaje"></p>
            <p id="mensaje_email"></p>
            <p id="mensaje_telefono_con"></p>
            <p id="mensaje_telefono_con_c"></p>
        </fieldset>
        <br />
        <br />

    </form>

    <!--<script src="js/formulario.js"></script>-->

    <script>
        $('.chosenCanton, .chosenParroquia').chosen({
            no_results_text: "No hay resultados...",
            allow_single_deselect: true
        });
        $(".chosenCanton").chosen().on("change", function(event) {
            document.getElementById('parroquia').value = "";
            $(".chosenParroquia").trigger('chosen:updated');
        });
        $(".chosenParroquia").chosen().on("chosen:showing_dropdown", function(event) {
            $(".chosenParroquia").trigger('chosen:updated');
        });
    </script>

</body>

</html>
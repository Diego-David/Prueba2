function validarCed() {
  var cad = document.getElementById("ced").value.trim();
  var total = 0;
  var longitud = cad.length;
  var longcheck = longitud - 1;
  var cedulaInput = document.querySelector("#ced").value;
  var extPermitidas = /^\d{5,10}((\s|[-])\d{1}[A-Z]{1})?$/;
  var mensaje = document.getElementById("mensaje");

  if (cad !== "" && longitud === 10) {
    for (i = 0; i < longcheck; i++) {
      if (i % 2 === 0) {
        var aux = cad.charAt(i) * 2;
        if (aux > 9) aux -= 9;
        total += aux;
      } else {
        total += parseInt(cad.charAt(i));
      }
    }

    total = total % 10 ? 10 - (total % 10) : 0;

    if (cad.charAt(longitud - 1) == total || extPermitidas.exec(cedulaInput)) {
      document.getElementById("salida").innerHTML =
        "<p>Su cédula es valida</p>";
      document.getElementById("p_cedula").innerHTML =
        '<img src="./img/check.png"/ style="width: 25px; height: 25px;">';
      document.getElementById("btnsubmit").disabled = false;
      mensaje.innerHTML = '<p style="color: red; text-align: center;"></p>';
    } else {
      document.getElementById("salida").innerHTML =
        "<p>Su cédula es invalida</p>";
      document.getElementById("p_cedula").innerHTML =
        '<img src="./img/mal.png"/ style="width: 25px; height: 25px;">';
      document.getElementById("btnsubmit").disabled = true;
      mensaje.innerHTML =
        '<p style="color: red; text-align: center;">El campo cédula tiene errores!</p>';
    }
  } else {
    document.getElementById("salida").innerHTML =
      "<p>Su cédula es invalida</p>";
    document.getElementById("p_cedula").innerHTML =
      '<img src="./img/mal.png"/ style="width: 25px; height: 25px;">';
    document.getElementById("btnsubmit").disabled = true;
    mensaje.innerHTML =
      '<p style="color: red; text-align: center;">El campo Cédula tiene errores!</p>';
  }
}

function validarTC() {
  var convencionalInput = document.getElementById("t_convencional").value;
  var validacionNumeros = /^\d{1,14}$/;
  var mensajeSalida = document.getElementById("mensaje_telefono_con");

  if (!validacionNumeros.exec(convencionalInput)) {
    mensajeSalida.innerHTML =
      '<p style="color: red; text-align: center;">El campo de Télefono Convencional tiene errores!</p>';
    document.getElementById("btnsubmit").disabled = true;
  } else {
    mensajeSalida.innerHTML =
      '<p style="color: red; text-align: center;"></p>';
    document.getElementById("btnsubmit").disabled = false;
  }

}

function validarTCe() {
  var celularInput = document.getElementById("t_celular").value;
  var validacionNumerosCelu = /^\d{9,14}$/;
  var mensajeSalidaCelu = document.getElementById("mensaje_telefono_con_c");

  if (!validacionNumerosCelu.exec(celularInput) || celularInput.length < 2) {
    mensajeSalidaCelu.innerHTML =
      '<p style="color: red; text-align: center;">El campo de Télefono Celular tiene errores!</p>';
    document.getElementById("btnsubmit").disabled = true;
  } else {
    mensajeSalidaCelu.innerHTML =
      '<p style="color: red; text-align: center;"></p>';
    document.getElementById("btnsubmit").disabled = false;
  }

}

function validarCorr() {
  var correoInput = document.getElementById("email").value;
  var validacionCorr = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  var mensajeSalidaCorr = document.getElementById("mensaje_email");

  if (!validacionCorr.exec(correoInput)) {
    mensajeSalidaCorr.innerHTML =
      '<p style="color: red; text-align: center;">El campo de Correo Electrónico tiene errores!</p>';
    document.getElementById("btnsubmit").disabled = true;
  } else {
    mensajeSalidaCorr.innerHTML =
      '<p style="color: red; text-align: center;"></p>';
    document.getElementById("btnsubmit").disabled = false;
  }

}
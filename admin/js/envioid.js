var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
  var url = "insertar.php";
  $.ajax({
    type: "POST",
    url: url,
    data: $("#idd").serialize(),
    success: function (data) {
      //console.log(data);
      console.log("Envio exitoso id guardada");
    },
  });
  return false;
});
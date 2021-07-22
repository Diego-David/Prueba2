$(document).ready(function () {
  //console.log("Estamos listos!!");

  var input = document.getElementById("idDocumento");
  var inputID = document.getElementById("idd");
  //input.disabled = true;
  inputID.disabled = true;

  var fecha = new Date();
  var inicio = "DE-";
  var year = fecha.getFullYear();

  $.ajax({
    type: "POST",
    url: "bd.php",
    //dataType: "json",
    success: function (data) {
      var id = data;
      var idTotal = inicio + id + "-" + year;
      //console.log(idTotal);
      input.value = idTotal;
      inputID.value = data;
    },
  });

  
});

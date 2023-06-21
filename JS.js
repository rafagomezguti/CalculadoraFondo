(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()


    function calcularCuotas() {

          var prestamo = document.getElementById("prestamo").value;
          var cuotas = document.getElementById("cuotas").value;
          var beneficiarioCheck = document.getElementById("beneficiarioCheck");
          var externoCheck = document.getElementById("externoCheck");
          var seguro = 3000;

          if(beneficiarioCheck.checked){
            var tea = 0.1836;
            var cuota_fija = (prestamo * tea / 12) / (1 - Math.pow(1 + tea / 12, -cuotas));
            var total_pagar = (cuota_fija * cuotas) + (seguro * cuotas);
            var detalle_cuotas = document.getElementById("detalle_cuotas");
            detalle_cuotas.innerHTML = "";
            var saldo = prestamo;

            for (var i = 1; i <= cuotas; i++){
              var interes = saldo * tea / 12;
              var capital = cuota_fija - interes;
              var cuotaSeguro = cuota_fija + seguro;

              saldo -= capital;
              detalle_cuotas.innerHTML += "<tr><td>" + i + "</td><td>$" + capital.toFixed(0) + "</td><td>$" + interes.toFixed(0) + "</td><td>$" + cuota_fija.toFixed(0) + "</td><td>$" + seguro.toFixed(0) + "</td><td>$" + cuotaSeguro.toFixed(0) + "</td></tr>";
            }


          }else if(externoCheck.checked){

            var tea = 0.2880;
            var cuota_fija = (prestamo * tea / 12) / (1 - Math.pow(1 + tea / 12, -cuotas));
            var total_pagar = (cuota_fija * cuotas) + (seguro * cuotas);
            var detalle_cuotas = document.getElementById("detalle_cuotas");
            detalle_cuotas.innerHTML = "";
            var saldo = prestamo;

            for (var i = 1; i <= cuotas; i++){
              var interes = saldo * tea / 12;
              var capital = cuota_fija - interes;
              var cuotaSeguro = cuota_fija + seguro;

              saldo -= capital;
              detalle_cuotas.innerHTML += "<tr><td>" + i + "</td><td>$" + capital.toFixed(0) + "</td><td>$" + interes.toFixed(0) + "</td><td>$" + cuota_fija.toFixed(0) + "</td><td>$" + seguro.toFixed(0) + "</td><td>$" + cuotaSeguro.toFixed(0) + "</td></tr>";
            }
            //Proximo año convertir la TEA- Mensual y despues la miltiplicas por 12
          }
          var total_pagar_element = document.getElementById("total_pagar")
          total_pagar_element.innerHTML = "$" + total_pagar.toFixed(0).toLocaleString();
          var resultado_element = document.getElementById("resultado");
          resultado_element.style.display = "block";
    }

    beneficiarioCheck.addEventListener("change", mostrarAlerta);
    externoCheck.addEventListener("change", mostrarAlerta);

    function mostrarAlerta() {
      // Verifica si al menos uno de los checkboxes está seleccionado
      if (beneficiarioCheck.checked && externoCheck.checked) {
        var mensaje = "¡Alerta! Seleccione solo una ópcion.";

        // Aquí puedes personalizar el mensaje según tus necesidades
        // Por ejemplo, puedes agregar un título
        var titulo = "********ERROR*********";

        // Combinar el título y el mensaje en una sola cadena
        var mensajeCompleto = titulo + "\n\n" + mensaje;

        // Mostrar la alerta con el mensaje personalizado
        alert(mensajeCompleto);
      }
    }
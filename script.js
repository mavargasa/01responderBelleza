function verificarBelleza() {
    var respuesta = prompt("¿Eres bellísimo/a?");
    var respuestaDiv = document.getElementById("respuesta");
    
    if (respuesta.toLowerCase() === "sí" || respuesta.toLowerCase() === "si") {
      respuestaDiv.innerText = "Ciertamente";
    } else if (respuesta.toLowerCase() === "no") {
      respuestaDiv.innerText = "No te creo";
    } else {
      respuestaDiv.innerText = "Respuesta inválida";
    }
  }
  
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

  $(document).ready(function(){
    $('select').formSelect();
  });


  function mostrarFeedback() {
    var fondoPopupFeedback = document.getElementById("contenedor-feedback");
    var seccionFormulario = document.getElementById("seccion-6");


  fondoPopupFeedback.classList.remove("no-mostrar");
  fondoPopupFeedback.classList.add("mostrar");
}

function recolectarDatos() {
  // PASOS 1 y 2: obtenemos los inputs que tienen los datos que nos interesan, y luego obtenemos el valor (los datos).

  // Nombre e email
  var inputNombre = document.getElementById("nombre");
  var nombre = inputNombre.value;

  var inputEmail = document.getElementById("email");
  var email = inputEmail.value;

  // PASO 3: obtenemos los lugares del html donde nos interesa MOSTRAR los datos que ingresó el usuario
    var spanNombre = document.getElementById("nombre-usuario");
    var spanEmail = document.getElementById("mail-usuario");

  // PASO 4: ponemos las variables que obtuvimos en el paso 2, en los elementos html que obtuvimos en el paso 3
  spanNombre.innerText = nombre;
  spanEmail.innerText = email;
}


function resetearFormulario() {
var inputNombre = document.getElementById("nombre");
var inputEmail = document.getElementById("email");
inputNombre.value = "";
inputEmail.value = "";
}


function enviarFormulario() {
  recolectarDatos();
  mostrarFeedback();
  resetearFormulario();
}

function cerrarFeedback() {
  var seccionFormulario = document.getElementById("seccion-6");
  var fondoPopupFeedback = document.getElementById("contenedor-feedback");

  fondoPopupFeedback.classList.remove("mostrar");
  fondoPopupFeedback.classList.add("no-mostrar");
  seccionFormulario.classList.remove("no-mostrar");
}

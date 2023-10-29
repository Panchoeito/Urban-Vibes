//abrir y cerrar menu en mobile
const navisible = document.querySelector(".navisible");
const abrir = document.querySelector(".abrir");
const cerrar = document.querySelector(".cerrar");

abrir.addEventListener("click", () => {
    navisible.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    navisible.classList.remove("visible");
})

// ocultar icono buscar cuando se activa el menu en mobile
const icono_buscar = document.querySelector(".icono_buscar");


abrir.addEventListener("click", () => {
    icono_buscar.classList.add("ocultar");
})

cerrar.addEventListener("click", () => {
        icono_buscar.classList.remove("ocultar");
})

// ocultar formulario cuando se activa el menu en mobile
const formocultar = document.querySelector(".formocultar");


abrir.addEventListener("click", () => {
    formocultar.classList.add("ocultar2");
})

// validacion email pagina contacto, muestra mensaje de error solo si no es valido el formato

document.getElementById("miFormulario").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    // Obtén el valor del campo de correo electrónico
    var emailInput = document.getElementById("email");
    var email = emailInput.value;
  
    // Expresión regular para validar una dirección de correo electrónico
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    // Realiza la validación
    if (!emailPattern.test(email)) {
      // Si la validación falla, muestra un mensaje de error
      document.getElementById("errorEmail").textContent = "Dirección de correo electrónico no válida";
      emailInput.classList.add("error");
    } else {
      // Si la validación es exitosa, borra cualquier mensaje de error
      document.getElementById("errorEmail").textContent = "";
      emailInput.classList.remove("error");
  
      
    }
  });

  //consulta a una API (punto 8 del TP) Respuesta Imagen

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://random.imagecdn.app/500/150", requestOptions)
    .then(response => response.blob())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


    // Consulta a una API Realiza una solicitud GET a la API utilizando fetch JSON

const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al realizar la solicitud');
    }
    return response.json(); // Convierte la respuesta a JSON
  })
  .then(data => {
    
    console.log(data);
  })
  .catch(error => {
    console.error('Hubo un error:', error);
  });

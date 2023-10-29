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

cerrar.addEventListener("click", () => {
        formocultar.remove("ocultar2");
})
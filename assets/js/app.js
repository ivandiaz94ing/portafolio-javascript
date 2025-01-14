//Funcion para desplazar arriba
const desplazarArriba = document.querySelector("#desplazar-arriba");
desplazarArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});     
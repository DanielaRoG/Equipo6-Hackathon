// Mostrar el botón cuando se baja en la página
window.onscroll = function() {
    let btn = document.getElementById("btnArriba");
    if (document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Función para desplazarse al inicio
document.getElementById("btnArriba").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
function guardar() {
    const nombre = document.getElementById("nombre").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();

    // Si falta el nombre, no guardar ni cambiar de página
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    // Si falta la ciudad, mostrar un mensaje
    if (ciudad === "") {
        alert("Por favor, ingresa tu ciudad.");
        return;
    }

    // Guardar los datos únicamente si ambos campos tienen información
    sessionStorage.setItem("nombre", nombre);
    sessionStorage.setItem("ciudad", ciudad);

    // Ir a la página 2
    window.location.href = "index2.html";
}
// Evento: al hacer clic en el botón, se ejecuta guardar 
document.getElementById("btn-guardar").addEventListener("click", guardar);


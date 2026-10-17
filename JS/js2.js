// Función: lee el nombre y lo muestra 
function mostrarNombre() { 
    const nombre = sessionStorage.getItem("nombre");   // lee de la bodega 
 
    if (nombre === null) { 
        document.getElementById("saludo").textContent = "No hay ningún nombre guardado."; 
    } else { 
        document.getElementById("saludo").textContent = "Hola, " + nombre; 
    } 
} 
 
// Función: borra el nombre y vuelve a mostrar el resultado 
function borrar() { 
    sessionStorage.removeItem("nombre");   // borra de la bodega 
    mostrarNombre();                       // actualiza el mensaje 
} 
 
// Eventos 
document.addEventListener("DOMContentLoaded", mostrarNombre);            // al cargar la página 
document.getElementById("btn-borrar").addEventListener("click", borrar); // al hacer 
clic 
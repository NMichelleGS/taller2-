// Función: lee el nombre y lo muestra 
function mostrarNombre() { 
    const nombre = sessionStorage.getItem("nombre");   // lee de la bodega 
    const ciudad = sessionStorage.getItem("ciudad");   // lee de la bodega
 
    if (nombre === null) { 
        document.getElementById("saludo").textContent = "No hay ningún nombre guardado."; 
    } else { 
        document.getElementById("saludo").textContent = "Hola, " + nombre + " de " + ciudad; 
    } 
} 
 
// Función: borra el nombre y vuelve a mostrar el resultado 
// Función: borrar todos los datos guardados
function borrar() {
    sessionStorage.clear();
    mostrarNombre();
}             

 
// Eventos 
document.addEventListener("DOMContentLoaded", mostrarNombre);            // al cargar la página 
document.getElementById("btn-borrar").addEventListener("click", borrar); // al hacer clic 
// Función: guarda el nombre y cambia de página 
function guardar() { 
    const nombre = document.getElementById("nombre").value; 
    const ciudad = document.getElementById("ciudad").value;
    sessionStorage.setItem("nombre", nombre);   // guarda en la bodega 
    sessionStorage.setItem("ciudad", ciudad);   // guarda en la bodega
    window.location.href = "index2.html";      // cambia de página 
} 
 
// Evento: al hacer clic en el botón, se ejecuta guardar 
document.getElementById("btn-guardar").addEventListener("click", guardar);
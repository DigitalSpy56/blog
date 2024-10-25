function mostrarMensaje() {
    alert("¡Has hecho clic en el botón!");
}

document.getElementById("formularioContacto").addEventListener("submit", function(event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;

    alert("Gracias, " + nombre + ". Hemos recibido tu mensaje.");
});

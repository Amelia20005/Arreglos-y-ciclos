alert("Hola Mundo!");
document.getElementById("formularioComentario").addEventListener("submit", function(e) {
    e.preventDefault(); // evitar recarga

    const texto = document.getElementById("comentarioInput").value;
    const lista = document.getElementById("listaComentarios");

    if (texto.trim() === "") return;

    const nuevoComentario = document.createElement("div");
    nuevoComentario.classList.add("comentario");

    const fechaHora = new Date().toLocaleString();

    nuevoComentario.innerHTML =
        "<p>" + texto + "</p>" +
        "<p class='fecha'>Publicado: " + fechaHora + "</p>" +
        "<button class='borrar'>Eliminar</button>";

    nuevoComentario.querySelector(".borrar").addEventListener("click", function() {
        nuevoComentario.remove();
    });

    lista.appendChild(nuevoComentario);
    document.getElementById("comentarioInput").value = ""; // limpiar textarea
});

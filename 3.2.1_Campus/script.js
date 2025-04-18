let librosLeidos = [];

function agregarLibro(nombreLibro) {
    librosLeidos.push(nombreLibro);
    console.log("Libro agregado: " + nombreLibro);
}

function mostrarTodosLibrosLeidos() {
    console.log("Libros leídos:");
    for (let i = 0; i < librosLeidos.length; i++) {
        console.log(librosLeidos[i]);
    }
}

agregarLibro("El Principito");
agregarLibro("Hábitos Atómicos");
agregarLibro("El arte de la guerra");
agregarLibro("El túnel");
agregarLibro("Rayuela");

mostrarTodosLibrosLeidos();

function buscarLibro(nombre) {
    return librosLeidos.includes(nombre);
}
console.log(buscarLibro("El Principito")); // true
console.log(buscarLibro("El Hobbit")); // false

function buscarLibrosPorLetra(letra) {
    return librosLeidos.filter(libro =>
        libro.toLowerCase().includes(letra.toLowerCase())
    );
}
console.log("Libros que contienen la letra 'e':", buscarLibrosPorLetra("e"));
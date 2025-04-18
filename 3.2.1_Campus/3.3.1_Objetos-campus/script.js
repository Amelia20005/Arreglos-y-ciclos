console.log("Hola");

// Función para crear objetos libro
function crearLibro(titulo, autor, año, estado) {
  return {
    titulo: titulo,
    autor: autor,
    año: año,
    estado: estado,
    capitulos: ["capitulo 1", "capitulo 2", "capitulo 3"],

    describirLibro: function () {
      console.log(
        'Libro titulado "' + this.titulo + '", escrito por ' + this.autor +
        ' en el año ' + this.año + ', el estado es: ' + this.estado + '.'
      );
    },

    modificarCapitulos: function (accion, capitulo) {
      if (accion === "agregar") {
        this.capitulos.push(capitulo);
        console.log('Capítulo "' + capitulo + '" agregado.');
      } else if (accion === "eliminar") {
        const index = this.capitulos.indexOf(capitulo);
        if (index > -1) {
          this.capitulos.splice(index, 1);
          console.log('Capítulo "' + capitulo + '" eliminado.');
        } else {
          console.log('El capítulo "' + capitulo + '" no fue encontrado.');
        }
      } else {
        console.log("Acción no válida. Usa 'agregar' o 'eliminar'.");
      }
    },

    agregarCapitulo: function (capitulo) {
      this.modificarCapitulos("agregar", capitulo);
    },

    eliminarCapitulo: function (capitulo) {
      this.modificarCapitulos("eliminar", capitulo);
    },
  };
}

// Objeto para manejar una lista de libros
const listaLibros = {
  libros: [],

  agregarLibro: function (libro) {
    this.libros.push(libro);
    console.log('Libro "' + libro.titulo + '" agregado a la lista.');
  },

  verificarLibro: function (titulo) {
    for (let i = 0; i < this.libros.length; i++) {
      if (this.libros[i].titulo === titulo) {
        console.log('El libro "' + titulo + '" SÍ está en la lista.');
        return true;
      }
    }
    console.log('El libro "' + titulo + '" NO está en la lista.');
    return false;
  },

  eliminarLibro: function (titulo) {
    const index = this.libros.findIndex(function (libro) {
      return libro.titulo === titulo;
    });

    if (index > -1) {
      this.libros.splice(index, 1);
      console.log('Libro "' + titulo + '" eliminado de la lista.');
    } else {
      console.log('El libro "' + titulo + '" no fue encontrado en la lista.');
    }
  }
};

// Ejemplo de uso
const libro1 = crearLibro("Cien años de soledad", "Gabriel García Márquez", 1967, "disponible");
const libro2 = crearLibro("El principito", "Antoine de Saint-Exupéry", 1943, "prestado");

listaLibros.agregarLibro(libro1);
listaLibros.agregarLibro(libro2);

listaLibros.verificarLibro("Cien años de soledad"); // true
listaLibros.verificarLibro("Don Quijote"); // false

listaLibros.eliminarLibro("El principito"); // elimina
listaLibros.verificarLibro("El principito"); // false
/*
Una funcion es un bloque de codigo que tienen un nombre para que pueda ser llamado a partir de ese nombre

function <nombreFuncion>(){
    //codigo a ejecutar
}

El codigo asociado a una funcion se ejecuta cuando la funcion es llamada (invocada).
*/

function saludo(){
    console.log("Hola Mundo, soy una función");
}

saludo(); // Manda a llamar a la función


/*
Las funciones pueden recibir entradas conocidas como parametros.

funtion <nombreFuncion>(parametro1, parametro2, ...){
//Codigo a ejecutar.
}

Los parametros pueden tener cualquier tipo de datos asociados:
- Numeros
- Strings
- Booleanos
-null
-Arreglos
-Funcion
-Objetos
*/

function saludarPersona(nombrePersona){
    console.log("¡Hola " + nombrePersona + ", yo soy una función!");
}
saludarPersona("Juan"); // Manda a llamar a la función y le pasa el argumento "Juan" como parametro
saludarPersona("Pedro"); // Manda a llamar a la función y le pasa el argumento "Pedro" como parametro

let nombre1 = "Andrea";
saludarPersona(nombre1)


/*
| Una funcion puede regresar un valor. El termino "regresar" significa
calcular salida.
function <nombreFuncion>(parametro1, parametro2, ...){
    //codigo a ejecutar
    return <valor a regresar>;
}
Una function puede regresar cualquier tipo de dato:
*/
function sumar(a, b){
   return a + b; // Devuelve el resultado de la suma
}

console.log(sumar(5,4));

let resultadoSuma = sumar(7, 7);
console.log(resultadoSuma); // Imprime el resultado de la suma

console.log(sumar(resultadoSuma, 6))

function sumarValoresArreglo(arreglo){
    if(arreglo.length > 1){
        return arreglo[0] + arreglo[1];
    }else if(arreglo.length == 1){
        return arreglo[0];
    }else{
        return 0;
    }

    console.log('Fin de la función'); // Este fragmento de código ya no se ejecuta ya que para este punto se ejecutó un return.
}

let pares1 = [2, 4, 6, 8];
console.log(sumarValoresArreglo(pares1));

//            0
let pares2 = [8];
console.log(sumarValoresArreglo(pares2)); // NaN -> NotANumber -> El valor no es un número.

let pares3 = [];
console.log(sumarValoresArreglo(pares3));

/*
    Funciones anidadas: Es posible declarar una función dentro de otra función.
*/

function sumarRestarMultiplicar(a, b){

    function sumar(a, b){
        return a + b;
    }

    function restar(a, b){
        return b - a;
    }

    function multiplicar(a, b){
        return a * b;
    }

    return sumar(a, b) + restar(a, b) + multiplicar(a, b);

}

console.log(sumarRestarMultiplicar(9, 2));

/*
    Scope (Alcance): Nos permite saber hasta dónde podemos utilizar una variable o una función.
*/


let nombreGato = "Tigrillo"; // Esta variable está en el alcance global.
// Una variable global es una variable que puede ser utilizar en cualquier parte del código.

function a(){
    // Bloque de código.
    let nombrePerro = "Cosa"; // Esta variable solo existe dentro de este bloque de código.
    console.log("Variable global dentro de una función: " + nombreGato);
    console.log("Variable local dentro de una función: " + nombrePerro);
}

a();

// console.log(nombrePerro); No puedo utilizar variables de un bloque de código interno a menos que sean globales.

if(true){
    // Bloque de código.
    console.log("Variable global dentro de un bloque de código de un if: " + nombreGato);

}

let i = 0;
while(i < 2){
    // Bloque de código.
    console.log("Variable global dentro de un bloque de código de un while: " + nombreGato);
    i++;
}

for(i = 0; i < 2; i++){
    // Bloque de código.
    let nombrePerro = "Mocka";
    console.log("Variable global dentro de un bloque de código de un for: " + nombreGato);
    console.log("Variable local dentro de un bloque de código de un for: " + nombrePerro);
    if(true){
        // Bloque de código.
        console.log("Variable global dentro de un bloque de código de un if dentro de un for: " + nombreGato);
        console.log("Variable local dentro de un bloque de código de un if dentro de un for: " + nombrePerro); // Se pueden utilizar variables de un bloque de código superior.
        nombrePerro = "La Mocka"; // Modificando la variable de un bloque de código padre.
    }
    console.log(nombrePerro);
    nombreGato = "Güero";
}

console.log(nombreGato);

console.log("-------------------------------------------------------------");
function crearGato(nuevoNombreGato){
    let nombreGato = nuevoNombreGato; // Si declaro una NUEVA variable local con el nombre de una variable que esté en un alcance superior, entonces se ignorará la variable del alcance superior.
    console.log("Dentro de la función antes del if: " + nombreGato);
    if(true){
        let nombreGato = "Zoro";
        console.log("Dentro del if dentro de la función: " + nombreGato);
    }
    console.log("Dentro de la función después del if: " + nombreGato);
}

crearGato("Bowie");
console.log("Fuera de la función: " + nombreGato);

// Tipos de datos II
/*
    - null
    - undefined
*/

let persona1 = null; // JS va a reservar espacio en memoria para guardar ahí un valor.
let persona2 = undefined; // JS ni siquiera reserva espacio para guardar algo.

// Ejercicios adicionales
/*
    Fácil
    1. Modificar la función de agregarLibro para evitar agregar duplicados.
    2. Crear una función para buscar un libro por nombre. En caso de que exista, regresar true, caso contario regresar false.
    3. Crear una función que regrese todos los libros que empiecen con una letra en específico. Hint: startsWith()

    Medio
    4. Crear una función para eliminar un libro a partir del nombre.
    5. Crear una función que regrese todos los libros en orden alfabético.
    6. Crear una función que muestre todos los libros en mayúsculas. Hint: toUpperCase()

    Difícil
    7. Crear una función que muestre el nombre al revés de un libro en una posición N
          0       1                 2                         3                   4
        ["1984", "Un mundo feliz", "El fin de la eternidad", "Hábitos atómicos", "Inmune"]
        invertirNombre(3) -> "socimóta sotibáH"

        Hint: String.length ¿Cómo puedo usar un ciclo y la longitud de una cadena para invertirla?
*/
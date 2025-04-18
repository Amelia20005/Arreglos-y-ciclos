/*
objeto literal es un tipo de dato que nos permite guardar mas de un valor dentro de una variable y acceder a 
los valores a traves de llaves.

formula de un objeto literal es: 
let nombreObjeto = {
    propiedad1: valor1,
    propiedad2: valor2,
    propiedad3: valor3
}
    el valor puede ser cualquier tipo de dato (string, number, boolean, array, objeto)

*/

let mascota1 = {
    nombre: "perro",
    edad: 5,
    raza: "labrador",
    color: "marron",
    estaEsterilizado: true,
    humano: { //objeto anidado
        nombre: "Juan",
        edad: 30,
    }
}


//leer datos
console.log(mascota1.nombre); //Accediendo a una propiedad
console.log(mascota1["raza"]); //Accediendo a una propiedad (otra propiedad)

console.log(mascota1.humano.nombre); //Accediendo a una propiedad de un objeto anidado

//Modificar datos
//Unamente tienen que utilizar el operador de asignacion.
console.log("la edad de " + mascota1.nombre + " es " + mascota1.edad); //la edad de perro es 5
//mascota1.edad = mascota1.edad + 1; //incrementando la edad de la mascota
//mascota1.edad += 1; //incrementando la edad de la mascota
mascota1.edad += 1; //incrementando la edad de la mascota
//mascota1.edad++; //incrementando la edad de la mascota
//mascota1.edad = 9; //modificando la edad de la mascota
console.log("la nueva edad de " + mascota1.nombre + " es " + mascota1.edad); //la nueva edad de perro es 6

//Agregando una nueva propiedad
mascota1.colorDeOjos = "verdes";
console.log(mascota1.colorDeOjos); //Accediendo a una propiedad que no existe (undefined)

/* Nosotros podemos crear una estructura predefinida de un objeto, esta estructura se crea
a traves de algo conocido como Constructor.
Una funcion Constructor es una funcion especial que nos permite definir la estructura de un objeto y asociar valores aeste.
Cuando mandamos a llamar a un constructor debemos utilizar la palabra reservada new.
Esta palabra reserva le indica a JS que tiene que reservar memoria para guardar informacion.

Atributos: Son valores que nos permiten definir una entidad (conocidad como caracteristicas).

Metodos: Son las acciones que realiza una entidad. (Acciones son funciones)
*/

function Humano(nuevoNombre, edad) {
    this.nombre = nuevoNombre;
    this.edad = edad;
    this.saludar = function (){
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");}
}

function Mascota(nuevoNombre, tipo, edad, colorDePelaje, raza, estaEsterilizado, humano) {
    this.nombre = nuevoNombre;
    this.tipo = tipo;
    this.edad = edad;
    this.colorDePelaje = colorDePelaje;
    this.raza = raza;
    this.estaEsterilizado = estaEsterilizado;
    this.humano = humano;
}
 
let humanoNuevo = new Humano("Juan", 30);// se esta creando un nuevo objeto
console.log(humanoNuevo.nombre); //Accediendo a una propiedad de un objeto anidado
console.log(humanoNuevo.edad);
humanoNuevo.edad =35;
console.log(humanoNuevo.edad);

humanoNuevo.saludar(); //Accediendo a un metodo de un objeto anidado

let humanaNueva = new Humano("Maria", 25);// se esta creando un nuevo objeto
humanaNueva.saludar(); //Accediendo a un metodo de un objeto anidado


let niño1 = new Humano("Pedrito", 5);// se esta creando un nuevo objeto
niño1.saludar(); //Accediendo a un metodo de un objeto anidado

let mascotaNueva = new Mascota("perro", "Chamoy", 5, "marron", "labrador", true, humanoNuevo);// se esta creando un nuevo objeto
console.log(mascotaNueva.nombre + " tiene " + mascotaNueva.edad + " años y su humano se llama: " + mascotaNueva.humano.nombre); //Accediendo a una propiedad de un objeto anidado

//Depuracion de codigo: probando que el codigo funcione

let personas = []; //array de objetos
for(let i = 0; i < 4; i++){
   personas.push(new Humano(String(i), i + 1)); //se esta creando un nuevo objeto
}

for(let i = 0; i < personas.length; i++){
    console.table(personas[i]);
}


//Destructuracion: Nos permite crear nuevas variables con los valores de un objeto o un arreglo.
/*
let nombre = humanoNuevo.nombre;
let edad = humanoNuevo.edad;
*/
let {nombre, edad} = humanoNuevo; //Las variables ha destructurar si o si tienen que tener el mismo
nombre

console.log(nombre)
console.log(edad);

//Bucle puede ser un For o While
/*
for(let i = 0; i < n; i++){
    //codigo a ejecutar
}

for... in
nos permite iterar sobre las llabes del objeto liternal
for(
)
for.. of
Este bucle nos permite iterar sobre los valores de un objeto iterable (array, string, etc)
Los objetos no son iterables.


console.log("for in")
for(let k in humanoNuevo){ 
    console.log(k); //Accediendo a una propiedad de un objeto anidado
}

console.log("for of")
/*
for(let v of humanoNuevo){ //value es el valor del objeto
    console.log(v); //Accediendo a una propiedad de un objeto anidado
}
    */

let contador = 1;

console.log(contador);

//While es una estructura de control que nosp ermite repetir una serie de instrucciones
/*
while (condicion) {
//Còdigo a ejecutar
}
Nota: La condicion siempre se ejecuta  primero y luego el codigo
*/
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// contador = 10;

// do-while es una estructura muy parecida al while, sin embargo aqui el codigo se ejecuta al menos una vez
/*
do {
// Codigo a ejecutar
}while (condicion);
*/

//El cilo while se utiliza cuando no sabemos hasta cuando se va utilizar
console.log("Ejecucion de un do-while");
do {
    console.log("Soy el còdigo de un do-while");
} while (contador <= 15);


//Se utiliza cuando sabemos hasta cuando se va a ejecutar
//for(inicializacion; condicion; incremento){
// Codigo a ejecutar
//}
console.log("Ejecución de un for");
for(let i = 0; i <= 20; i = i + 2){
    console.log(i);
}

//Arreglos es una forma de guardar mas de un valor en una sola variable
// let alumnosTona = Array (); //Arreglo vacìo
//let alumnosTona = Array (5); // Un arreglo con 5 posiciones

let alumnosTona = ["Juan", "Pedro", "Maria", "Jose", "Luis", "Ana", "Rosa", "Carlos", "Jorge", "Miguel"];

console.log(typeof alumnosTona); //typeof es un operador que nos permite conocer el tipo  
console.log(alumnosTona); 

//Indice de un arreglo es la posicion de un valor como si fuera coordenada.
/*El indice empieza a contar desde 0.
      0       1        2      3       4       5       6       7       8       9
 ["Juan", "Pedro", "Maria", "Jose", "Luis", "Ana", "Rosa", "Carlos", "Jorge", "Miguel"]
*/

console.log(alumnosTona[4]); //Lectura del valor de un arreglo
alumnosTona[1] = "Mendez"; //Modificacion de un valor de un arreglo
console.log(alumnosTona[1]);

//console.log(alumnosTona[-1]); //No podemos utilizar un valor negativo como idice

//En js un arreglo puede tener cualquier tipo de dato
//No esta restringido a que todos los datos de este sean del mismo tipo.
let arreglo = ["Juan", 5, 3.14, true, false, "Pedro", null, undefined,];

// Metodos (acciones) de los arreglos
let frutas = [];
frutas.push("Naranja"); //Agregar un valor al final del arreglo
console.log(frutas);
frutas.push("Manzana");
console.log(frutas);

frutas.unshift("Pera"); //Agregar un valor al inicio del arreglo
console.log(frutas);

frutas.push("Zanahoria");
frutas.unshift("Cebolla");
console.log(frutas);

frutas.pop(); //Eliminar el ùltimo valor del arreglo
console.log(frutas);

frutas.shift(); //Eliminar el primer valor del arreglo
console.log(frutas);

//¿Cómo acceder a mas un elemento de un arreglo?
console.log(frutas.slice(1,3)); //Acceder a un rango de valores del arreglo

//¿Cómo eliminar un arreglo que no está ni al inicio ni al final?
frutas.splice(1, 1, "fresa", "piña"); //Eliminar un valor y agregar otro
console.log(frutas);


//                  0  1  2  3  4   5   6   7   8   9
let numerosAzar= [1, 3, 4, 5, 8, 12, 11, 13, 18, 20];
numerosPares.length; //Permite conocer cuantos valores hay en el arreglo.

let pares  = [];
let impares = [];

//Para cada valor del arreglo, mostrar un mensaje indicando si el numero es par o impar.
//% - El modulo nos permite saber si el valor es par o impar
for(let i= 0; i < numerosAzar.length; i++){
    if(numerosPares[i] % 2 == 0){
        console.log(numerosAzar[i] + " es par");
        pares.push(numerosAzar[i]); //Agregar un valor al arreglo
    }else{
        console.log(numerosAzar[i] + " es impar");
        impares.push(numerosAzar[i]); //Agregar un valor al arreglo
    }
}
console.log("Los numeros pares son: " + pares);
console.log("Los numeros impares son: " + impares);


// Objetos- objeto literal es un diccionario
//Estructura clave-valor
let fruta1 = {¨
    nombre: "Naranja",
    tipo: "Citrico",¨
}
    
let fruta2 = {
    nombre: "Manzana",
    tipo: "Pomásea"
}

let citricos = 1;
let pomaceas = 1;
let bayas = 0;

    let frutasObjetos = [fruta1, fruta2]; //Arreglo de objetos
    console.log(frutasObjetos[0].tipo); //Acceder a un valor de un objeto dentro de un arreglo


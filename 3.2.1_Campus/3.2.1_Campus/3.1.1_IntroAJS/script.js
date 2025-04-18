console.log("¡Hola mundo!");

// Variables: Es un espacio dentro de la computadora que nos permite guardar datos.
/* Receta mágica para crear una variable: 
    Especificador de variable + nombre de la variable = valor
*/

/*
    Especificadores de variables: var, let, const
*/

// String (cadenas): Nos permite representar texto
// Para crearlas podemos utilizar comillas simples (''), comillas dobles ("") o backticks (``).

let nombre = "Malinali"; // Declarar una variable llamada nombre y le asigno el valor Malinali.
console.log(nombre);

nombre = "Daniel"; // Reasignando el valor.
console.log(nombre);

// Number (números): Nos permite representar números.
// A diferencia de las cadenas, este tipo de dato NO requiere de ningún tipo de comillas.
let edad = 26; // Entero
let estatura = 1.7; // Número con punto decimal
let gradosCentigrados = -10.2; // Negativos

console.log(edad);
console.log(estatura);
console.log(gradosCentigrados);

// Concatenación: Es una operación que nos permite crear una cadena a partir de diferentes valores.
let mensajeFinal = nombre + " tiene " + edad + " años.";
console.log(mensajeFinal);

// const = constante
const GRAVEDAD = 9.81;
const PI = 3.141592;

// GRAVEDAD = 10; <- No podemos reasignar el valor de una constante.

// Boolean (Booleano): Nos permite representar que algo es verdadero o falso, prendido o apagado, 1 o 0.
// true | false
let esMayorDeEdad = true;
let tieneTerceraEdad = false;

// Palabra reservada: Es una palabra especial en el lenguaje de programación que NO puede usarse como
//  nombre de variables, funciones, clases.

alert(mensajeFinal);
let nombreMascota = prompt("Escribe el nombre de tu mascota"); // SIEMPRE convierte el valor a una cadena.
alert("El nombre de la mascota es: " + nombreMascota);

// Comentarios JS <- Los comentarios es texto dentro del código fuente que no se ejecuta.
// Comentarios de una línea: Se representan con 2 diagonales -> //
// Comentarios multilínea: Se representan con /* */

/*
    Este
    es
    un
    comentario
    multilinea
*/

// Ejercicio 1:
// Leer los datos de una mascota e imprimir un mensaje que incluya todos los datos leídos.
// Utilizar al menos 1 vez cada tipo de dato (String, Number y Boolean).

// Datos de una mascota
let nombre = "Firulais";        // String
let edad = 5;                   // Number
let tieneVacunas = true;        // Boolean

// Imprimir mensaje con los datos
console.log("Nombre de la mascota: " + nombre);
console.log("Edad de la mascota: " + edad + " años");
console.log("¿Tiene vacunas?: " + tieneVacunas);

// Mensaje completo en una sola línea
console.log(`La mascota se llama ${nombre}, tiene ${edad} años y ${tieneVacunas ? "sí tiene" : "no tiene"} sus vacunas.`);

// Ejercicio 2:
/*
    Crear un cuestionario de 10 preguntas. Mostrar cada pregunta una por una y al final mostrar
    la respectiva pregunta con la respuesta ingresada por el usuario.
    Que al menos 2 preguntas sean de opción múltiple.
    Que al menos 2 preguntas sean respuesta de valores numéricos.
    Cada pregunta debe tener la respuesta en los comentarios del código.
    Agregar cada respuesta correcta a una variable.
*/
// Respuestas correctas
let score = 0;
let respuestasUsuario = [];

// Pregunta 1: opción múltiple
let p1 = prompt("1. ¿Cuál es la capital de Francia?\nA) Berlín\nB) Madrid\nC) París\nD) Roma");
// Respuesta correcta: C
respuestasUsuario.push(`1. ¿Cuál es la capital de Francia? Respuesta: ${p1}`);
if (p1.toUpperCase() === "C") score++;

// Pregunta 2: numérica
let p2 = prompt("2. ¿Cuánto es 7 x 8?");
// Respuesta correcta: 56
respuestasUsuario.push(`2. ¿Cuánto es 7 x 8? Respuesta: ${p2}`);
if (parseInt(p2) === 56) score++;

// Pregunta 3
let p3 = prompt("3. ¿Qué lenguaje se utiliza para dar estilo a una página web?");
// Respuesta correcta: CSS
respuestasUsuario.push(`3. ¿Qué lenguaje se utiliza para dar estilo a una página web? Respuesta: ${p3}`);
if (p3.trim().toLowerCase() === "css") score++;

// Pregunta 4
let p4 = prompt("4. ¿Cuántos días tiene una semana?");
// Respuesta correcta: 7
respuestasUsuario.push(`4. ¿Cuántos días tiene una semana? Respuesta: ${p4}`);
if (parseInt(p4) === 7) score++;

// Pregunta 5: opción múltiple
let p5 = prompt("5. ¿Cuál es el planeta más grande del sistema solar?\nA) Tierra\nB) Marte\nC) Júpiter\nD) Saturno");
// Respuesta correcta: C
respuestasUsuario.push(`5. ¿Cuál es el planeta más grande del sistema solar? Respuesta: ${p5}`);
if (p5.toUpperCase() === "C") score++;

// Pregunta 6
let p6 = prompt("6. ¿Cuál es el océano más grande del mundo?");
// Respuesta correcta: Pacífico
respuestasUsuario.push(`6. ¿Cuál es el océano más grande del mundo? Respuesta: ${p6}`);
if (p6.trim().toLowerCase() === "pacífico" || p6.trim().toLowerCase() === "pacifico") score++;

// Pregunta 7
let p7 = prompt("7. ¿Qué animal es conocido como el rey de la selva?");
// Respuesta correcta: León
respuestasUsuario.push(`7. ¿Qué animal es conocido como el rey de la selva? Respuesta: ${p7}`);
if (p7.trim().toLowerCase() === "león" || p7.trim().toLowerCase() === "leon") score++;

// Pregunta 8
let p8 = prompt("8. ¿Cuántas letras tiene el abecedario en español?");
// Respuesta correcta: 27
respuestasUsuario.push(`8. ¿Cuántas letras tiene el abecedario en español? Respuesta: ${p8}`);
if (parseInt(p8) === 27) score++;

// Pregunta 9
let p9 = prompt("9. ¿Cuál es el color resultante de mezclar azul y amarillo?");
// Respuesta correcta: Verde
respuestasUsuario.push(`9. ¿Cuál es el color resultante de mezclar azul y amarillo? Respuesta: ${p9}`);
if (p9.trim().toLowerCase() === "verde") score++;

// Pregunta 10
let p10 = prompt("10. ¿Qué gas necesitamos para respirar?");
// Respuesta correcta: Oxígeno
respuestasUsuario.push(`10. ¿Qué gas necesitamos para respirar? Respuesta: ${p10}`);
if (p10.trim().toLowerCase() === "oxígeno" || p10.trim().toLowerCase() === "oxigeno") score++;

// Mostrar resultados
let resumen = respuestasUsuario.join('\n');
alert(`Respuestas ingresadas:\n${resumen}\n\nTu puntuación: ${score}/10`);
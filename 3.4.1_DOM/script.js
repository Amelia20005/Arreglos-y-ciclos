function agregarTarea() {


    //Accediendo al elelemento input de la tarea
	let agregarTareaInput = document.getElementById("agregarTareaInput");

    if(agregarTareaInput.value === "") {
        alert("Por favor, ingrese una tarea."); // Si el input está vacío, muestra un mensaje de alerta.
        return; // Termina la función si el input está vacío.
    }
   //Accediendo a la lista desordenada ul
   let listaTareasUl =document.getElementById("listaTareasUl");

   document.createElement("li"); // crea un nuevo elemento li (list item) en el DOM, pero no lo agrega a la lista aún.
   let nuevoLi = document.createElement("li"); // crea un nuevo elemento li (list item) en el DOM, pero no lo agrega a la lista aún.
   nuevoLi.innerText = agregarTareaInput.value; // asigna el valor del input al nuevo elemento li

   listaTareasUl.appendChild(nuevoLi); // agrega el nuevo elemento li a la lista desordenada ul

   agregarTareainput.value = ""; // Limpia el input después de agregar la tarea.
}


let agregarTareaBtn = document.getElementById("agregarTareaBtn");
 
agregarTareaBtn.onclick = agregarTarea; // agregarTareaBtn.onclick = function() { alert("Agregando Tarea..."); };

agregarTareaBtn.addEventListener("click", agregarTarea); // agregarTareaBtn.addEventListener("click", function() { alert("Agregando Tarea..."); });

/*
El elemento addEventListener es un método que permite agregar un evento a un elemento HTML. Este método toma dos argumentos: el tipo de evento que se desea escuchar (en este caso, "click") y la función que se ejecutará cuando ocurra ese evento (en este caso, agregarTarea).
El metodo recibe 2 parametros:
1. el evento que se desea escuchar (en este caso, "click")
2. la función que se ejecutará cuando ocurra ese evento (en este caso, agregarTarea).
*/

//NOTA: Cuando trabajamos con addEventListener, no podemos utilizar el on.
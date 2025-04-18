
let frutasConTipo = [
    { nombre: "Naranja", tipo: "Cítrico" },
    { nombre: "Manzana", tipo: "Pomácea" },
    { nombre: "Plátano", tipo: "Tropical" },
    { nombre: "Uva", tipo: "Baya" },
    { nombre: "Fresa", tipo: "Baya" },
    { nombre: "Piña", tipo: "Tropical" },
    { nombre: "Mango", tipo: "Tropical" },
    { nombre: "Cereza", tipo: "Drupa" },
    { nombre: "Pera", tipo: "Pomácea" },
    { nombre: "Sandía", tipo: "Cucurbitácea" },
    { nombre: "Melón", tipo: "Cucurbitácea" },
    { nombre: "Durazno", tipo: "Drupa" },
    { nombre: "Coco", tipo: "Drupa" },
    { nombre: "Kiwi", tipo: "Baya" },
    { nombre: "Limón", tipo: "Cítrico" }
];

// Objeto para guardar conteo
let conteoPorTipo = {};

// Ciclo para recorrer y contar
for (let i = 0; i < frutasConTipo.length; i++) {
    let tipo = frutasConTipo[i].tipo;

    if (conteoPorTipo[tipo]) {
        conteoPorTipo[tipo]++;
    } else {
        conteoPorTipo[tipo] = 1;
    }
}

// Mostrar resultado
console.log("Conteo de frutas por tipo:");
console.log(conteoPorTipo);
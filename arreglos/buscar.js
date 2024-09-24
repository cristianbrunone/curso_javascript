let arreglo = ["Cristian", "Yrina", "Brunone"];

// Buscar en Arrays
// indexOf -> devuelve la posición del elemento
// includes -> devuelve true o false si el elemento existe

console.log(arreglo.indexOf("Cristian")); // Retorna la posición del elemento si existe
console.log(arreglo.includes("Cristian")); // Retorna true si existe dentro del arreglo

let respuesta = arreglo.find(function (elemento) {
    return elemento === "Cristian";
});

let respuestas = arreglo.findIndex(function (elemento) {
    return elemento === "Cristian";
});

console.log(respuesta); // Imprime "Cristian"
console.log(respuestas); // Imprime la posición del elemento

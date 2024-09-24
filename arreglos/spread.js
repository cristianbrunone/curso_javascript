// Iterable
// Spread syntax(...) // pasa de ser una estructura unica a expandirlos en elementos individuales

let arreglo = [1, 2, 3];

console.log(arreglo);

console.log(...arreglo);

// Rest parameters (...) Unifica elementos que estan separados en un solo arreglo
// A diferencia de arguments que es un objeto se puede hacer otras cosas con metodos de arreglos
function demo(...arr) {
    console.log(arr);
}

demo(10, 2);

//Example

function promedio(nombre, ...calificaciones) {
    console.log(nombre, calificaciones);
}

promedio("Uriel", 1, 10, 5, 4, 20);




let numeros = [8, 3, 4, 10, 5, 3]

// let nuevoArreglo = numeros.filter(function () {
//     return numero % 2 === 0;
// });

let lenguajes = ["ruby", "php", "javascript"];

let nuevoArreglo = lenguajes.filter(function (lenguaje) {
    return lenguaje !== "ruby"
});

console.log(nuevoArreglo);

let nuevo = numeros.filter(function (numero) {
    return numero % 2;
});
console.log(nuevoArreglo);
console.log(nuevo);
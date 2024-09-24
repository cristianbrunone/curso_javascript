let numeros = [1, 2, 3, 4, 5];

let suma = numeros.reduce(function (acc, numero) { //suma todos los elementos de un array
    return acc + numero;
}, 0);

console.log(suma);

let numeritos = [2, 2, 2, 2, 2];
let sumas = numeritos.reduce(function (acc, numeritos) {
    return acc + numeritos
}, 0);

console.log(sumas);


let nombres = ["Cristian", "Brunone"];

let html = nombres.reduce(function (acc, nombre) {
    return acc + "<li>" + nombre + "</li>"
}, "");

console.log(html);
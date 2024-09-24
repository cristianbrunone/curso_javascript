/* map */

let numeros = [2, 3, 4, 5, 1, 34];


let cuadrados = numeros.map(function (numero) {
    return numero * numero;
});

console.log(cuadrados);

/*
2 => [4]
3 => [4,9]
5 => [4.9.25]
1 => [4,9,25,1]
34 => [4,9,25,1,1156]
*/

let numeritos = ["10", "5", "4", "3"];

numeritos = numeritos.map(function (numString, indice, arreglo) {
    console.log(numString, indice, arreglo)
    return parseInt(numString);
});

console.log(numeritos);
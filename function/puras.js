// no produce efectos secundarios
let edades = [20];

function modificador(edades) {
    let copia = [...edades];
    copia[0] = 25;
    return copia;
}

console.log(edades);
modificador(edades);
console.log(edades);



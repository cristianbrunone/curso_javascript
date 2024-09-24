let edad = [20];

function modificador(edades) {
    edad[0] = 25;
    console.log("Dentro de la función: " + edades);
}

console.log(edades);
modificador(edades);
console.log(edades);
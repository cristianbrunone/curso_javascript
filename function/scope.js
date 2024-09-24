/* Scope global, Scope local */

var nombre = "Uriel";
console.log(nombre);

diHola();

function diHola() {
    nombre = "Cristian";
    console.log("Hola " + nombre);
}
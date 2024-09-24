//imprimir del 1 al 10

/*
1 instruccion inicial
2 condicion
3 instruccion despues de cada iteración
*/

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

do {
  console.log("ejecución");
} while (prompt("¿Continuar? (sí para seguir)") === "sí");


while (prompt("¿Continuar? (sí para seguir)") === "sí") {
  console.log("ejecución");
}



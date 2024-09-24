/*Debe ser posible retornarlo
 Debe ser posible asignarlo a una variable
 debe ser posible enviarlo como argumento
*/

function build() {
   return function(){console.log("Hola");}
}

let f = build();

f();


let calificacion = [10, 9, 8, 7, 9];

let arreglo = ["cristian", "brunnone", 1, {}, function () { }, [1, 23]]

arreglo[0] = "Brunone"

arreglo.push(3); // agrega en la ultima posicion push.
arreglo.unshift(3); //agrega al principio del arreglo
arreglo.pop(); // quita el elemento que esta hasta el final
let eliminado = arreglo.shift(); //elimina el que esta al inicio

let resultado = arreglo.push(10); // retorna cual es la nueva longitud del arreglo


console.log(arreglo);
console.log(eliminado);
console.log(resultado);
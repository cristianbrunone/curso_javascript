let arreglo = [1, 2, 3, 4];

// for (let i = 0; i < arreglo.length; i++) {
//     console.log(
//         arreglo[i]
//     );
// }

// for (let i = arreglo.length - 1; i >= 0; i--) { //iterar de atras para adelante
//     console.log(
//         arreglo[i]
//     );
// }

for (let i = 0; i < arreglo.length; i++) {
    let element = arreglo[i];
    console.log(element);
}

arreglo.forEach(function (element) { console.log(element) });

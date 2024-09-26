let user = { name: "Cristian", edad: 26 };


let { name: username, apellido = "brunone" } = user; //lado derecho las variables en que se van a separar las propiedades del objeto

console.log(apellido);

let { name, ...sobrantes } = user;

console.log(sobrantes);

let calificaciones = [10, 9, 8];

let calificacioness = [10, 9, 8];

let [matematicas, programacion, ciencias] = calificaciones;

let [matematicass, ...otrasCalificaciones] = calificacioness;

console.log(otrasCalificaciones);

console.log(matematicas);


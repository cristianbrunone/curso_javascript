let user = { name: "Cristian", edad: 26 };


let { name: username, apellido = "brunone" } = user; //lado derecho las variables en que se van a separar las propiedades del objeto

console.log(apellido);
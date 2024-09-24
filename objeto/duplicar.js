let user = {
    edad: 20,
    nombre: "Cristian"
}

//Operador de Expanción que permiter duplicar los objetos y combinarlos

let copia = { ...user };

let admin = { ...user, permisos: true } //combiando 

let esquemaPermisos = { nivel: 2 }

let admin2 = { ...user, ...esquemaPermisos, nombre: "Moises" }

let copia2 = Object.assign({}, user); // hace una copia

let copia3 = Object.assign(user, { permisos: true });


console.log(copia);

console.log(copia2);
console.log(copia3);
console.log(admin);

console.log(admin2);

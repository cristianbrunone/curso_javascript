//Usamos los metodos get y set antes del nombre
// get = se usa para obtener o leer el valor de una propiedad
//set = se usan para signar un valor nuevo a algunas de las propiedades

class User {
    // Getter para obtener el nombre con la primera letra en mayúscula
    get nombre() {
        return this._nombre.charAt(0).toUpperCase() + this._nombre.slice(1);
    }

    // Setter para asignar el nombre, con validación de tipo
    set nombre(nombre) {
        if (typeof nombre !== "string") throw new Error("No es una cadena");
        this._nombre = nombre;
    }
}

let user = new User();

user.nombre = "cristian"; // Usamos el setter

console.log(user.nombre); // Usamos el getter para obtener el nombre


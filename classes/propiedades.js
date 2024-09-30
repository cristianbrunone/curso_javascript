class Curso {
  title = "Hola";
  inscribir = (nombre) => this.nombre = nombre;

}

let c = new Curso();
c.inscribir("Cristian");

console.log(c.nombre);
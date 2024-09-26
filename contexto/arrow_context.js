let estudiante = {
    nombre : "Cristian",
    saludar: () => { console.log("Hola soy "+ this.nombre); },
    saludarAlt: function(){console.log("Hola soy "+ this.nombre);}
}

estudiante.saludar(); //Hola soy undefined
estudiante.saludarAlt(); //Hola soy Uriel

function Estudiante2() {
    this.nombre = "Cristian",
    this.saludar = () => console.log("Hola soy " + this.nombre);
}

let e = new Estudiante2();

e.saludar();


// un arrow function adopta el contexto en la creacion y no lo modifica en la ejecucion

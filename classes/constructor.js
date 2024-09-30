//Se ejecuta de manera automatica cuando se instancia la clase
class Curso {
    constructor(titulo, color="yellow"){
        this.titulo = titulo;
        this.color = color;
        console.log(arguments);
    }
}

new Curso("Curso profesional de JavaScript",1,2,3,4,5);
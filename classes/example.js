class Curso {
    constructor(titulo) {
        this.titulo = titulo;
    }

    inscribir() {
        console.log("Inscrito");
    }
}

let javaScript = new Curso("Curso de js");

console.log(javaScript.titulo);
javaScript.inscribir();
class Curso {
    #title = "JavaScript";
    constructor() {
        this.#bienvenida();
    }
    #bienvenida() {
        console.log("Bienvenido al curso: " + this.#title);
    }

}

let javaScript = new Curso();

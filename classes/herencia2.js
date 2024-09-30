class User {
    constructor(name) {
        this.name = name;
    }
    saludar() { console.log("Hola Cristian"); }
}

class Admin extends User {
    constructor(name) {
        super(name);
    }

    saludar() {
        super.saludar();

        console.log("Hola soy Admin");
    }
}

let admin = new Admin("Cristian");
admin.saludar();
console.log(admin.name);
//Esta caracteristica nos permite extender metodos del padre o  sobreescribirlos sin duplicar la funcionalidar que hay en el padre
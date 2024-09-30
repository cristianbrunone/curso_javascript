class Human {
    especie = "Humano";
    respirar() { console.log("Inhala"); }

}

class Admin extends Human { }

let admin = new Admin();

admin.respirar();

//El concepto de herencia esta estrechamente relacionado con reutilización de codigo

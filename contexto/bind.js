function Estudiante() {
    this.nombre = "Cristian";
    this.saludar = function () { console.log(this, arguments) };
}

let e = new Estudiante();

e.saludar();

/*
    inmediata: call y apply
    lazy: bind
*/

// e.saludar.call({}, "1", "2");

// e.saludar.apply({}, ["1", "2"]);

let nuevaFunction = e.saludar.bind({}, "1", "2");
nuevaFunction();





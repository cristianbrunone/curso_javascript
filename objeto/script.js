let curso = {
    titulo: "Curso profesional de JS",
    formato: "video",
    bloques: ["Introduccion", "funciones"],
    inscribir: function () {
        console.log("Inscrito");
    },

}


curso.inscribir();

curso.titulo = "Curso de Ruby";
curso["inscribir"] = function () { console.log("Inscribir v2"); }

console.log(curso.titulo);

curso.inscribir();

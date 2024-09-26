let objeto = {
    func: function () {
        console.log(this);
    }
}

let func = objeto.func;

func();

function ejecutor(f) {
    f();
}

ejecutor(objeto.func);
//El metodo get forma parte de la classe y no del objeto eso quiere decir que lo podemos instanciar desde la classe sin instanciar el objeto

class Api {
    //propiedad statica
    static EDPOINT = "localhost:3000";
    //metodo estatico
    static get() { return new this() }

    name = "Hola";
}

Api.get();

console.log(Api.EDPOINT);

console.log(Api.get());

class User {
    permission = 0;
    static admin() {
        let user = new this();
        user.permission = 5;
        return user;
    }
}

console.log(User.admin())
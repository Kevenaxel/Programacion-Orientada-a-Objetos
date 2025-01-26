//let Pelota = {
    //Tamano: "",
    //Color: "blanco con negro",
  //  lbaire:"4"
//}

//console.log(Pelota)

// Una clase es una plantilla que simboliza o instancia objetos con propiedades para su aplicacion modular.

class Logueo { // La clase

constructor(usuario, contrasenia){  // Constructor con propiedades
    this._usuario = usuario;
    this._contrasenia = contrasenia;

}
// Metodos, funciones o  comportamiento
     iniciar_sesion(){
        return `El usuario ${(this._usuario)} con contrasena ${(this._contrasenia)} ah iniciado sesion`
    }

    ver_historias(){
        return `El usuario ${(this._usuario)} con contrasena ${(this._contrasenia)} ve las historias de sus amigos`
    }

    ver_publicaciones(){

    }

    buscar(){

    }
}
let autorizacion = new Logueo("Juan Carlos", 1234)
let autorizacion2 = new Logueo("Josue", "perrito")
console.log(autorizacion.iniciar_sesion())
console.log(autorizacion2.ver_historias())



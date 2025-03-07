class Padre{
    constructor(nombre){
        this.nombre = nombre;
    }
    saludo()
    {
        console.log(`hola ${this.nombre}`)
    }

}
class Hija extends Padre{ //extends se coloca porque es una herencia y es para poder mostrar tambien.
    constructor(nombre){
        super(nombre)
    }

    mostrar(){
        super.saludo();
    }
}

//let = objeto = new Padre('Juan')
//objeto.saludo()
let = objeto = new Hija('Juan')
objeto.saludo();
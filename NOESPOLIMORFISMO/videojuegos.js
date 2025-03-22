class Ataques{
    patada(){

    }
    salto(){

    }
    correr(){
        console.log("Este jugador no tiene este movimiento.")
    }
}

class Jugador1 extends Ataques{
    constructor(nombre){
        super();
        this.nombre = nombre;
    }

    correr(){
        console.log(`${this.nombre} corre por su vida`)
    }

}

class Jugador2 extends Ataques{
    constructor(nombre){
        super();
        this.nombre = nombre;
    }

    correr(){
        console.log(`${this.nombre} corre con velocidad`)
    }
    patada(){
        console.log(`${this.nombre} da patadas voladoras`)
    }
}

class Jugador3 extends Ataques{
    constructor(nombre){
        super();
        this.nombre = nombre;
    }

    correr(){
        console.log(`${this.nombre} corre con mucha velocidad`)
    }

    patada(){
        console.log(`${this.nombre} da michas patadas voladoras`)
    }

    salto(){
        console.log(`${this.nombre} salta demaciado este jugador`)
    }
}
let player1 = new Jugador1('Slim')
let player2 = new Jugador2('Killer')
let player3 = new Jugador3('Kevincito')


player1.correr()

player2.correr()
player2.patada()

player3.correr()
player3.patada()
player3.salto()
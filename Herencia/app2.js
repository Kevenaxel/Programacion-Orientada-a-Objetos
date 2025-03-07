class Animal{
    hacerSonido(){
        console.log("Sonido generico de animal");
    }
}

class Perro extends Animal{
    hacerSonido(){
        console.log("Guau Guau")
    }
}

class Gato extends Animal{
    hacerSonido(){
        console.log("Miau Miau")
    }
}

let miPerro = new Perro();
let miGato = new Gato();

miPerro.hacerSonido(); //Salida: Guau Guau
miGato.hacerSonido();//Salida: Miau MIau
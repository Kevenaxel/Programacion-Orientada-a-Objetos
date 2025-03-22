class Animal{
    accion()
    {
        console.log("GRRR")
    }
}

class Perro extends Animal {
    accion()
    {
        console.log("Woff")
    }
}

class Gato extends Animal {
    accion()
    {
        console.log("Meawwww")
    }
}

let Operro = new Perro()
Operro.accion()
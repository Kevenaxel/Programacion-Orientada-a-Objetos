//Que no es polimorfismo

class A{
    idiomas(){
        console.log("Espanol")
    }
}

class B {
    idiomas(){
        console.log("Ingles")
    }
}

let Objeto1 = new A()
let Objeto2 = new B()

Objeto1.idiomas()
Objeto2.idiomas()
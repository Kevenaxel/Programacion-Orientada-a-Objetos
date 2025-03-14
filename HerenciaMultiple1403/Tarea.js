let Programacion1 = {
    materia(){
        console.log(` ${this.nombre} tiene clases de programacion 1`)
    }
}

let logica2 = {
    materia2(){
        console.log(` ${this.nombre} tiene clases de logica`)
    }
}

class Estudiante{
    constructor(nombre){
        this.nombre = nombre;
    }
    
}

class Matricula extends Estudiante{
    constructor(nombre){
        super(nombre)
    }
}

Object.assign(Matricula.prototype,Programacion1,logica2);
const miEstudiante = new Matricula ("Kevin Flores")
miEstudiante.materia()
miEstudiante.materia2()
const Revision = {
    Diagnostico(){
        return `${this.nombre} esta enfermo`;
    }
};

const Curacion = {
    curar(){
        return `${this.nombre} esta curado`;
    }
};

const Inyeccion = {
    vacunar(){
        return `${this.nombre} esta vacunado`;
    }
};

class Pacientecanino{
    constructor(nombre){
        this.nombre = nombre;
    }
}

class Consulta extends Pacientecanino{
    constructor(nombre){
        super(nombre);
    }
}

Object.assign(Consulta.prototype,Revision,Curacion,Inyeccion);

const miConsulta = new Consulta ("Plaga")
console.log(miConsulta.Diagnostico());
console.log(miConsulta.curar());
console.log(miConsulta.vacunar());
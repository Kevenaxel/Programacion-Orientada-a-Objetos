class Estudiante {
    constructor(nombre, sanciones){
        this.nombre = nombre;
        this.sanciones = sanciones;
        this.Totalmulta = 0;
    }

    agregarLaSancion(Infraccion, Monto){
        this.sanciones.push({ Infraccion, Monto});
        this.Totalmulta += Monto;
    }

    MostrarMulta(){
        
    }

}
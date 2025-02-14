class Persona{
    constructor(nombre, edad){
        this.nombre = nombre; //Usamos una variable de respaldo
        this._edad= edad;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre
    }

    get edad(){
        return this.edad;
    }

    set edad(_edad){
        this._edad = _edad;
        if(_edad >= 18){
            console.log("Ya es mayor de edad")
        }else{
            console.log("Aun esta Nino")
        }
    }
    mostrar(){
        let mensaje = `Mi nombre es ${this.nombre} y mi edad es: ${this._edad}`;
        console.log(mensaje);
    }
}

//Crear una instancia de la cclase
let obj = new Persona("Keven",128)
obj.mostrar();// Salida de Mi Nombre 
//Asignar un nuevo nombre usando el setter
obj.nombre = "Juan";
obj.mostrar() 
obj.edad = 25

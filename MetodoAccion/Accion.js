class Automovil{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = false
    }

    encender(){
        this.encendido = true;
        console.log(`El Automovil ${this.marca} ${this.modelo} esta encendido.`);

    }

    apagar(){
        this.encendido = false;
        console.log(`El Automovil ${this.marca} ${this.modelo} esta apagado.`);
    }
}

const miAuto = new Automovil("Toyota", "Corolla");
miAuto.encender();
miAuto.apagar();
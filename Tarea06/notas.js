class Nota{
    constructor(titulo, detalle ){
        this.titulo = titulo;
        this.detalle = detalle;
    }

    Palabras(){
        return this.detalle.trim().split(/\s+/).length;
    }

    mostrar(){
        console.log(`Titutlo: ${this.titulo}`);
        console.log(`Detalle: ${this.detalle}`);
        console.log(`Estas Son Las Cantidad de Palabra en Detalle: ${this.Palabras()}`);
    }
}

const nota1 = new Nota("Mi primer nota es", "Estamos contando palabras ")
nota1.mostrar();
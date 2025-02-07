class Descuento {
    constructor(id, producto, codigo, fechaIngreso, precio) {
        this.id = id;
        this.producto = producto;
        this.codigo = codigo;
        this.fechaIngreso = fechaIngreso;
        this.precio = parseFloat(precio); 
    }

    calcularPrecios() {
        let precioAumentado = this.precio * 1.2; 
        let precioReducido = this.precio * 0.8;  

        console.log(`Precio original $${this.precio.toFixed(2)}`);
        console.log(`Precio con 20% más ${precioAumentado.toFixed(2)}`);
        console.log(`Precio con 20% menos $${precioReducido.toFixed(2)}`);
    }

    Id() {
        console.log(`El Id es: ${this.id} Nombre de: ${this.producto} Codigo de: ${this.codigo} Ingreso el: ${this.fechaIngreso} y el precio es: ${this.precio}`);
        this.calcularPrecios(); 
    }
}

let obj = new Descuento("100", "Dorito Crujiente", "2020", "07022025", "1.69");
obj.Id();

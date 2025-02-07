//Tome los datos de una entidad con el nombre producto, donde los atributos deben ser:
//id,producto,codigo,fechaIngreso,precio
//Cuando se ejecute el metodo de registro de producto
class Descuento {
    constructor(id, producto, codigo, fechaIngreso, precio) {
        this.id = id;
        this.producto = producto;
        this.codigo = codigo;
        this.fechaIngreso = fechaIngreso;
        this.precio = precio
    }
    Id(id, producto, codigo, fechaIngreso, precio) {
        console.log(`El Id es: ${this.id} Nombre de: ${this.producto} Codigo de: ${this.codigo} Ingreso el: ${this.fechaIngreso} y el precio es: ${this.precio}`)
    }
} 
obj = new Descuento("100", "Dorito Crujiente", "2020", "07022025", "1.69")
obj.Id()
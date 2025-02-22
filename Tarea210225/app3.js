class Inventario {
    constructor() {
      this.productos = [];
    }
  
    agregarStock(producto, precio, cantidad) {
      if (precio < 0) return console.log("Error: El precio no puede ser negativo.");
      if (cantidad <= 0) return console.log("Error: La cantidad debe ser mayor a 0.");
  
      let p = this.productos.find(p => p.producto === producto);
      if (p) p.cantidad += cantidad;
      else this.productos.push({ producto, precio, cantidad });
  
      console.log(`${cantidad} unidades de ${producto} agregadas.`);
    }
  
    comprar(producto, cantidad) {
      let p = this.productos.find(p => p.producto === producto);
      if (!p) return console.log("Error: Producto no encontrado.");
      if (cantidad <= 0) return console.log("Error: La cantidad debe ser mayor que 0.");
      if (cantidad > p.cantidad) return console.log(`Error: No hay suficiente stock de ${producto}.`);
  
      p.cantidad -= cantidad;
      console.log(`${cantidad} unidades de ${producto} compradas.`);
    }
  
    getProductos() {
      return this.productos;
    }
  
    setProducto(producto, precio, cantidad) {
      let p = this.productos.find(p => p.producto === producto);
      if (p) {
        p.precio = precio;
        p.cantidad = cantidad;
        console.log(`${producto} actualizado.`);
      } else {
        console.log("Error: Producto no encontrado.");
      }
    }
  }
  
  // Uso
  const inventario = new Inventario();
  inventario.agregarStock("Celular", 100, 69);
  inventario.agregarStock("Teclado", 30, 90);
  inventario.comprar("Laptop", 12);
  inventario.setProducto("Laptop", 1600, 23);
  console.log(inventario.getProductos());
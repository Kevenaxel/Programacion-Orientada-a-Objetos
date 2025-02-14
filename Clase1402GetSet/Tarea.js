class Persona {
    constructor(nombre, edad, telefono, dui) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
        this.setDui(dui); 
    }

    getNombre() {
        return this.nombre;
    }

    getEdad() {
        return this.edad;
    }

    getTelefono() {
        return this.telefono;
    }

    getDui() {
        return this.dui;
    }

    setDui(dui) {
        const regex = /^\d{9}$/; 
        if (regex.test(dui)) {
            this.dui = dui;
        } else {
            throw new Error("El dui  debe tener 9 numeros.");
        }
    }
}


try {
    let persona1 = new Persona("Kevin Flores", 20, "76716954", "067430525");
    console.log("Nombre:", persona1.getNombre());
    console.log("Edad:", persona1.getEdad());
    console.log("Teléfono:", persona1.getTelefono());
    console.log("DUI:", persona1.getDui());
} catch (error) {
    console.error(error.message);
}
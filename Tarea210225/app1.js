class Persona {
    constructor(id, nombre, telefono, genero, departamento) {
        this._id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.genero = genero;
        this.departamento = departamento;
    }

    get id() {
        return this._id;
    }

    set id(nuevoId) {
        this._id = nuevoId;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        if (typeof nuevoNombre === "string" && nuevoNombre.length <= 20) {
            this._nombre = nuevoNombre;
        } else {
            throw new Error("El nombre debe ser texto con una longitud máxima 20 caracteres.");
        }
    }

    get telefono() {
        return this._telefono;
    }

    set telefono(nuevoTelefono) {
        if (Number.isInteger(Number(nuevoTelefono)) && nuevoTelefono.length === 8) {
            this._telefono = nuevoTelefono;
        } else {
            throw new Error("El teléfono debe ser numérico y tener 8 dígitos.");
        }
    }

    get genero() {
        return this._genero;
    }

    set genero(nuevoGenero) {
        if (nuevoGenero === "F" || nuevoGenero === "M") {
            this._genero = nuevoGenero;
        } else {
            throw new Error("El género debe ser 'F' (femenino) o 'M' (masculino).");
        }
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(nuevoDepartamento) {
        const departamentosValidos = ["Ventas", "RRHH", "Administración"];
        if (departamentosValidos.includes(nuevoDepartamento)) {
            this._departamento = nuevoDepartamento;
        } else {
            throw new Error("El departamento debe ser: Ventas, RRHH o Administración.");
        }
    }

    mostrarInformacion() {
        const generoCompleto = this._genero === "F" ? "Femenino" : "Masculino";
        console.log(`ID: ${this._id}`);
        console.log(`Nombre: ${this._nombre}`);
        console.log(`Teléfono: ${this._telefono}`);
        console.log(`Género: ${generoCompleto}`);
        console.log(`Departamento: ${this._departamento}`);
    }
}

try {
    const persona1 = new Persona(100, "Kevin Flores", "76716954", "M", "Ventas");
    persona1.mostrarInformacion();

    persona1.id = 200;
    persona1.nombre = "Ana tonieta";
    persona1.telefono = "70406011";
    persona1.genero = "F";
    persona1.departamento = "RRHH";
    persona1.mostrarInformacion();
} catch(error) {
    console.error(error.message);
}
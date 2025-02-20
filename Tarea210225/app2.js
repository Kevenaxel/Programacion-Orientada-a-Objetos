const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Persona {
    constructor(fechaNacimiento) {
        if (!this.validarFecha(fechaNacimiento)) {
            throw new Error("El Formato de fecha es invalida Intente denuevo. Utilize 'YYYY-MM-DD'.");
        }
        this._fechaNacimiento = new Date(fechaNacimiento + "T00:00:00");
    }

    get edad() {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this._fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this._fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < this._fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    }

    set fechaNacimiento(nuevaFecha) {
        if (!this.validarFecha(nuevaFecha)) {
            console.log("El Formato de fecha es invalida Intente denuevo. Utilize 'YYYY-MM-DD'.");
            return;
        }
        this._fechaNacimiento = new Date(nuevaFecha + "T00:00:00");
    }

    validarFecha(fecha) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
            return false;
        }
        
        const fechaConvertida = new Date(fecha + "T00:00:00");
        const hoy = new Date();
        
        return !isNaN(fechaConvertida.getTime()) && fechaConvertida <= hoy;
    }
}

// Solicitar la fecha de nacimiento al usuario usando readline
rl.question("Ingrese la fecha de nacimiento (YYYY-MM-DD): ", (fechaIngresada) => {
    try {
        const persona = new Persona(fechaIngresada);
        console.log(`Edad: ${persona.edad} años`);
    } catch (error) {//El catch es por si se ingresa mal los anos tire el error y muestre el mensaje.
        console.log(error.message);
    }
    rl.close();//Si esta bien el codigo permite terminar el mensaje
});

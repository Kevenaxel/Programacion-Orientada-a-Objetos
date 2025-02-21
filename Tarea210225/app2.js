const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Persona {
    constructor(fechaNacimiento) {
        if (!this.esFechaValida(fechaNacimiento)) {
            throw new Error("El formato de fecha utilizado es invalido. Utiliza este:'YYYY-MM-DD'.");//throw Si la fecha no es válida, lanza un error con un mensaje.
        }
        this._fechaNacimiento = new Date(`${fechaNacimiento}T00:00:00`);
    }

    get edad() {//Define el metodo para poder calcular la edad
        const hoy = new Date();//Obtiene la fecha actual
        let edad = hoy.getFullYear() - this._fechaNacimiento.getFullYear();//Se calcula la edad haciendo la resta de los anos
        const diferenciaMeses = hoy.getMonth() - this._fechaNacimiento.getMonth();//Se calcula la diferencia entre meses, fecha de nacimiento hasta hoy
        const mismoMesPeroDiaMenor = diferenciaMeses === 0 && hoy.getDate() < this._fechaNacimiento.getDate();//Hace la comprobacion hacia los datos ingresado si ha cumplido anios
        
        if (diferenciaMeses < 0 || mismoMesPeroDiaMenor) {
            edad--;
        }
        return edad;
    }

    set fechaNacimiento(nuevaFecha) { // El metodo set sirve para hacer un cambio de fecha de nacimiento si la nueva fecha no es valida tira un error
        if (!this.esFechaValida(nuevaFecha)) {
            console.log("El formato de fecha utilizado es invalido. Utiliza este: 'YYYY-MM-DD'.");
            return;
        }
        this._fechaNacimiento = new Date(`${nuevaFecha}T00:00:00`);
    }

    esFechaValida(fecha) {//Hcae la commprobacion si la fecha es valida
        if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {//Esto es una expresion regular para verificar que la fecha sigue el formato
            return false;
        }
        
        const fechaConvertida = new Date(`${fecha}T00:00:00`);
        return !isNaN(fechaConvertida.getTime()) && fechaConvertida <= new Date();//Hace la commprobacion que si la fecha es valida y verifica que la fecha no sea en el futuro
    }
}

rl.question("Ingresar su fecha de nacimiento porfavor:(YYYY-MM-DD): ", (inputFecha) => {
    try {
        const usuario = new Persona(inputFecha);
        console.log(`Tienes ${usuario.edad} años.`);
    } catch (error) {
        console.log(error.message);
    }
    rl.close();
});

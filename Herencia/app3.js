class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Salario: ${this.salario}`);
    }
}

class Gerente extends Empleado {
    constructor(nombre, salario, departamento) {
        super(nombre, salario);
        this.departamento = departamento;
    }

    gestionar() {
        console.log(`${this.nombre} está gestionando el departamento ${this.departamento}`);
    }
}

class Contabilidad extends Empleado {
    calcularSueldoNeto() {
        let seguro = this.salario * 0.03;
        let renta = this.salario * 0.075;
        let sueldoNeto = this.salario - seguro - renta;
        console.log(`Sueldo neto de ${this.nombre} después de deducciones: ${sueldoNeto.toFixed(2)}`);
    }
}


let empleado1 = new Contabilidad("Kevin", 1000);
empleado1.calcularSueldoNeto();

class Estudiantes {
    constructor(nombre) {
        this.nombre = nombre;
        this.sanciones = [];
    }

    Sancion(infraccion, monto) {
        this.sanciones.push({ infraccion, monto });
    }

    mostrarLaMulta() {
        console.log(`Estudiante: ${this.nombre}`);
        this.sanciones.forEach(({ infraccion, monto }, i) =>
            console.log(`${i + 1}. ${infraccion} - $${monto}`)
        );
        console.log(`Total: $${this.sanciones.reduce((t, { monto }) => t + monto, 0)}`);
    }
}

const Multas = {
    "Llegada tardía": 1,
    "Caminar por los pasillos en horas de clase": 3,
    "No andar vestimenta apropiada": 5,
    "No hacer uso adecuado de las instalaciones": 10
};

const estudiante1 = new Estudiantes("Kevin Flores");
estudiante1.Sancion("Llegada tardía", Multas["Llegada tardía"]);
estudiante1.Sancion("Caminar por los pasillos en horas de clase", Multas["Caminar por los pasillos en horas de clase"])
estudiante1.Sancion("No andar vestimenta apropiada", Multas["No andar vestimenta apropiada"]);
estudiante1.Sancion("No hacer uso adecuado de las instalaciones", Multas["No hacer uso adecuado de las instalaciones"])

estudiante1.mostrarLaMulta();

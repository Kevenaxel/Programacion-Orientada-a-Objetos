class Loteria {
    constructor() {
        this.numeroGanador = Math.floor(Math.random() * 100);
    }

    jugar(Numero, Apuesta) {
        if (![1, 5, 10, 20].includes(Apuesta)) {
            console.log("Monto inválido. Usa $1, $5, $10 o $20.");
            return;
        }

        if (Numero < 0 || Numero > 99) {
            console.log("El Número esta fuera de rango (0-99). Sigue Inténtandolo de nuevo.");
            return;
        }

        console.log(`Tu número: ${Numero}`);
        console.log(`Número ganador: ${this.numeroGanador}`);

        if (Numero === this.numeroGanador) {
            console.log(`Ganaste $${Apuesta * 20}!`);

        } else {
            console.log("Sigue intentandolo.");
        }

        this.numeroGanador = Math.floor(Math.random() * 100);
    }
}

const loteria = new Loteria();

loteria.jugar(30, 10);

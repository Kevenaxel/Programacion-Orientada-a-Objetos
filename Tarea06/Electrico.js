class ConversorTemperatura {
    constructor(valor, escala) {
        this.valor = valor;
        this.escala = escala.toLowerCase();
    }

    convertirACelsius() {
        if (this.escala === 'fahrenheit') {
            return (this.valor - 32) * 5 / 9;
        } else if (this.escala === 'kelvin') {
            return this.valor - 273.15;
        }
        return this.valor;
    }

    convertirAFahrenheit() {
        if (this.escala === 'celsius') {
            return (this.valor * 9 / 5) + 32;
        } else if (this.escala === 'kelvin') {
            return (this.valor - 273.15) * 9 / 5 + 32;
        }
        return this.valor;
    }

    convertirAKelvin() {
        if (this.escala === 'celsius') {
            return this.valor + 273.15;
        } else if (this.escala === 'fahrenheit') {
            return (this.valor - 32) * 5 / 9 + 273.15;
        }
        return this.valor;
    }

    mostrarConversiones() {
        console.log(`Temperatura ingresada: ${this.valor}°${this.escala[0].toUpperCase()}`);
        console.log(`Celsius: ${this.convertirACelsius()}°C`);
        console.log(`Fahrenheit: ${this.convertirAFahrenheit()}°F`);
        console.log(`Kelvin: ${this.convertirAKelvin()}K`);
    }
}

const temp1 = new ConversorTemperatura(100, 'Celsius');
temp1.mostrarConversiones();

const temp2 = new ConversorTemperatura(250, 'Fahrenheit');
temp2.mostrarConversiones();

const temp3 = new ConversorTemperatura(400, 'Kelvin');
temp3.mostrarConversiones();

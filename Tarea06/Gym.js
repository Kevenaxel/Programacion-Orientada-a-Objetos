class ClientesGym {
    constructor(Nombre, Peso, Altura){
        this.Nombre = Nombre;
        this.Peso = Peso;
        this.Altura = Altura;
    }

    CalcularIMC(){
        const imc = this.Peso / (this.Altura * this.Altura);
        return imc;
    }

    Resultado(){
        const imc = this.CalcularIMC();
        let categoria = "";


        if(imc < 18.5) {
            categoria = "Peso Bajo";

        }else if (imc >= 18.5 && imc < 24.90){

            categoria = "Peso Normal";

        }else if (imc >= 25 && imc < 29.90){

            categoria = "Es SobrePeso";
            
        }else{
            categoria = "Tiene Obesidad"
        }

        console.log(`Cliente: ${this.Nombre}`);
        console.log(`IMC: ${imc.toFixed(2)}`);
        console.log(`Categoria: ${categoria}`);
    }
    
}
    const cliente1 = new ClientesGym("Kevin Flores", 21, 1.78);

    cliente1.Resultado();

    const cliente2 = new ClientesGym("Carlos Ochoa", 22, 1.90);

    cliente2.Resultado();

    const cliente3 = new ClientesGym("Roxana Carlota", 69, 2.00);

    cliente3.Resultado();

    

export {}

namespace Veiculo {
    export class Carro {
        nome: string

        constructor(nome: string) {
            this.nome = nome
        }
    }
}

namespace Motores {
    export class Motor {
        potencia: number

        constructor(pot: number) {
            this.potencia = pot
        }
    }

}

const supra = new Veiculo.Carro("Supra")
const v8 = new Motores.Motor(400)

console.log(supra, v8)
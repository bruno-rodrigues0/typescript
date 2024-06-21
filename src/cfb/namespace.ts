export {}

namespace Veiculo {
    export class Carro {
        nome: string
        motor: Motores.Motor

        constructor(nome: string, motor: Motores.Motor) {
            this.nome = nome
            this.motor = motor
        }
    }
}

namespace Motores {
    class Turbo {
        pot: number

        constructor(pot: number) {
            this.pot = pot
        }
    }

    const turbo = new Turbo(200)

    export class Motor {
        potencia: number

        constructor(pot: number) {
            this.potencia = pot + turbo.pot 
        }
    }

}

const v8 = new Motores.Motor(400)
const supra = new Veiculo.Carro("Supra", v8)
const civic = new Veiculo.Carro("Civic", new Motores.Motor(200))

console.log(civic)
console.log(supra)
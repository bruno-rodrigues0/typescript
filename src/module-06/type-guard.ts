export = {} 

// ==> Exemplo 01

const formatoata = (valor: Date | string) => {
    if (valor instanceof Date) {
        return valor.toUTCString();
    }

    return new Date(valor).toUTCString();
};

console.log(formatoata(new Date("2023-01-01")))
console.log(formatoata("2023-01-01"))


// ==> Exemplo 02

type alpha = string | number;


function add (a: alpha, b:alpha){
    if(typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a.concat((b))
    }

    throw new Error('Argumentos inválidos')
}


console.log(add(4, 5))
console.log(add('pi', 'ka'))
//console.log(add(3, 'pau'))


// ==> Exemplo 03

class Carro {
    nome: string;
    marca: string;

    constructor(nome: string, marca: string) {
        this.marca = marca;
        this.nome = nome;
    }
}


class Moto{
    nome: string;
    ano: number;

    constructor(nome: string, ano: number) {
        this.ano = ano;
        this.nome = nome;
    }
}

function detalhesVeículo (veiculo: Carro | Moto) {
    if(veiculo instanceof Carro) {
        return `O nome do carro eh ${veiculo.nome} e a marca é ${veiculo.marca}`
    } else if (veiculo instanceof Moto) {
        return `O nome da moto eh ${veiculo.nome} e o ano eh ${veiculo.ano}`
    }
}

console.log(detalhesVeículo(new Carro('Toyota', 'Supra')))
console.log(detalhesVeículo(new Moto('Honda', 1999)))









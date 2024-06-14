export {}

// ==> Exemplo 01

interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;
};

function exibirNome(pessoa: Pessoa){
    return `
    Nome: ${pessoa.nome}
    Sobrenome:  ${pessoa.idade}
    Idade: ${pessoa.idade}
    `
};

const bruno = {
    nome: 'Bruno',
    sobrenome: 'Silva',
    idade: 17
};

console.log(exibirNome(bruno));


// ==> Exemplo 02

interface Livro {
    titulo: string;
    autor: string;
    paginas?: number;
};

const livro: Livro = {
    titulo: 'Clean Code',
    autor: 'Robert C. Martin',
};

console.log(livro);

// ==> Exemplo 03

interface Carro {
    readonly modelo: string;
    ano: number;
    valor?: number;
};

const carro: Carro = {
    modelo: 'Fusca',
    ano: 2003
};

console.log(carro);

// carro.modelo = 'Uno';

// ==> Exemplo 04

interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    comer(tipoComida: string): void;
}

class Gato implements IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    constructor (nome: string, idade: number, estaVivo: boolean){
        this.nome = nome;
        this.estaVivo = estaVivo;
        this.idade = idade;
    }

    comer(tipoComida: string) {
        console.log(`O gato ${this.nome} está comendo ${tipoComida}`)
    }
}


const gatingo: Gato = new Gato('gatingo', 3, true);

gatingo.comer('ração');


// ==> Exemplo 05

interface Pessoa2 {
    nome: string;
    sobrenome: string;
    idade: number;
}

type Pessoa3 = {
    nome: string;
    sobrenome: string;
    idade: number;
}

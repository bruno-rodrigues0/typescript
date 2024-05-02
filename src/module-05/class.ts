export {};

// ==> Exemplo 01 -> Classes

interface IPessoa {
    nomeCompleto(): string;
}

abstract class Pessoa implements IPessoa {
    protected nome: string;
    protected sobrenome: string;
    protected idade: number;

    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    public nomeCompleto(): string {
        return this.nome + " " + this.sobrenome;
    }
}

// ==> Exemplo 02

interface IEstudante {
    getEstudante(): string;
}

class Estudante extends Pessoa implements IEstudante {
    private codEstudante: number;

    constructor(
        nome: string,
        sobrenome: string,
        idade: number,
        codigo: number
    ) {
        super(nome, sobrenome, idade);
        this.codEstudante = codigo;
    }

    public getEstudante(): string {
        return `${this.codEstudante}: ${this.nome} ${this.sobrenome}`;
    }
}

type estudanteCreator = (
    nome: string,
    sobrenome: string,
    idade: number,
    codigo: number
) => Estudante;

const createStudent: estudanteCreator = (
    nome: string,
    sobrenome: string,
    idade: number,
    codigo: number
) => {
    const estudante1 = new Estudante(nome, sobrenome, idade, codigo);
    return estudante1;
};

createStudent("Bruno", "Rodrigues", 17, 5238);

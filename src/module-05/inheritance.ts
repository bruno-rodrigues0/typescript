export { }

// ==> Exemplo 01

class Animal {
    mover(distancia: number = 0) {
        console.log(`Animal se moveu ...: ${distancia} metros`)
    }
}

class Cachorro extends Animal{
    latir() {
        console.log(`Au, Au!`);
    }
}

const cachorro = new Cachorro();

cachorro.latir();
cachorro.mover(10);
cachorro.latir();

// ==> Exemplo 02

abstract class Pessoa {
    protected _nome: string;
    protected _sobrenome: string;

    constructor(nome: string, sobrenome: string){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return `${this._nome} ${this._sobrenome}`
    }

    apresetarPessoa(){
        return `Meu nome é ${this._nome} ${this._sobrenome}`
    }
}

class Funcionario extends Pessoa {
    private _funcao: string;

    constructor(nome: string, sobrenome: string, funcao: string){
        super(nome, sobrenome);
        this._funcao = funcao;
    }

    get funcao(){
        return `${this._funcao}`;
    }
}

const funcionario = new Funcionario('Bruno', 'Rodrigues', 'Dev Sênior');

console.log(funcionario.nomeCompleto);

console.log(funcionario.apresetarPessoa());

console.log(funcionario.funcao);
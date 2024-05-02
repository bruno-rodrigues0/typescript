export { }

// ==> Exemplo 01

class Funcionario {
    readonly dataNascimento: Date;

    constructor(dataNascimento: Date){
        this.dataNascimento = dataNascimento;
    }
}

const funcionario = new Funcionario(new Date(2006, 9, 9));

console.log(funcionario.dataNascimento);

// ==> Exemplo 02

class Funcionario_02 {
    nome:string;
    readonly codigoFuncioan: number;

    constructor(nome: string, codigo: number){
        this.codigoFuncioan = codigo;
        this.nome = nome;
    }
}

const func = new Funcionario_02("Bruno", 1324);

console.log(func);

// ==> Exemplo 03

interface IFuncionario {
    codigoFunc: number;
    nomeFunc: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const funcionario_03: Readonly<IFuncionario> =  {
    codigoFunc: 1231,
    nomeFunc: 'Bruno'
}

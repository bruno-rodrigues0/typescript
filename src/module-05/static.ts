/* eslint-disable @typescript-eslint/no-unused-vars */
export {};

// ==> Exemplo 01

class Funcionario {
    static contratacoes = 0;

    private _nome: string;
    private _sobrenome: string;
    private _titulo: string;

    constructor(nome: string, sobrenome: string, titulo: string) {
        Funcionario.contratacoes++;

        this._nome = nome;
        this._sobrenome = sobrenome;
        this._titulo = titulo;
    }
}

const funcionario_01 = new Funcionario("Bruno", "Rodrigues", "Dev Sênior");
const funcionario_02 = new Funcionario("Irineu", "Junio", "Dev Sênior");

console.log(Funcionario.contratacoes);

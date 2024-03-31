// ==> Exmeplo 01

let pessoa: [string, string, number];

pessoa = ['Bruno', 'Student', 17];
// pessoa  = [17, 'Student', 'Bruno']; ERROR;

console.log(pessoa);

//==> Exemplo 02

let pessoa1: [string, string, number];

pessoa1 = ['Bruno', 'Student', 17];

console.log(pessoa1[1]);

// ==> Exemplo 03

let pessoa2: [nome: string, profissao: string, idade: number];

pessoa2 = ['Bruno', 'Student', 17];

console.log(pessoa2)

// => Exemplo 04 

let frutas1: [string, ...string[]];

frutas1= ['abaxaki', 'lajanra', 'çamâ', 'meçanlia', 'ganma'];

console.log(frutas1)
console.log(...frutas1)

// ==> Exemplo 05

let listaFrutas: [number, boolean, ...string[]] = [5, true, ...frutas1]

console.log(listaFrutas);

// ==> Exmeplo 06

function lsitarPessoals(infos:[nome:string, idade:number]) {
        return [...infos];
}

let resultado = lsitarPessoals(['Bruno', 15])
console.log(resultado)


// ==> Exemplo 07

type Nome = 
    | [primeiroNome: string, sobrenome: string]
    | [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome){
    return [...nome];
}

console.log(criarPessoa('Bruno', 'Rodrigues', 'e Silva'))
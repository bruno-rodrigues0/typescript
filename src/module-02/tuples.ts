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


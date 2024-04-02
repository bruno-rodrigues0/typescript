// ==> Exemplo 01

const a: any = 888;
const b: any = ['perigo'];

const c = a + b;

console.log(c);

// ==> Exemplo 02

let frase; // type any (not recommend)
frase =  'Oi Pessoal'; // its not a string type

console.log(frase);

let frase2 = 'Bruno' // type string 
let frase3: string = 'Bruno' // also string

// ==>  Exemplo  03

const formulario: { [campoFOrmulario: string]: any } = {
    nome: 'bruno',
    snome: 'rodrigues',
    IdleDeadline: 34,
}

console.log(formulario);

 // ==> Exemplo 01

 let frutas: string[] = ['abaxaki', 'lajanra', 'çamâ', 'meçanlia', 'ganma'];
 
 console.log(frutas[2]);
 
 // ==> Exmeplo 02
 
 let frutas2: Array<string> = ['abaxaki', 'lajanra', 'çamâ', 'meçanlia', 'ganma'];
 
 console.log(frutas2[2]);

 // ==> Exemplo 03

 let idiomas: Array<string> = ['Portugues', 'Ingles', 'Espanhol', 'Frances']

idiomas.push("Mandarim")
idiomas.push("Japones");

console.log(idiomas);

// ==> Exemplo 04

let progammingLanguages: Array<string> = ['c++', 'TypeScript', 'JavaScript', 'Python', 'PHP']

console.log(progammingLanguages.length)

// ==> Exemplo 05

let listaNumeros: Array<number> = [0, 1, 2, 3, 4, 5];

console.log(listaNumeros);

listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];

console.log(listaNumeros);

// ==> Exmeplo 06

let progammingLanguages2: Array<string> = ['C++', 'TypeScript', 'JavaScript', 'Python', 'PHP']

function funcaoLinguagens(linguagens: string[]){
    for(let i = 0; i < linguagens.length; i++){
        console.log(linguagens[i]);
    }
}

funcaoLinguagens(progammingLanguages);
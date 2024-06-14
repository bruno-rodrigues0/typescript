// ==> Exemplo 01

interface Animal {
    nome: string;
    idade: number;
    tamanho: number;
}

interface Cachorro extends Animal {
    raca: string;
}

const cachorro: Cachorro = {
    nome: 'Irineu',
    idade: 4,
    tamanho: 1.2,
    raca: 'Pastor'
}

console.log(cachorro)


// ==> Exemplo 02 

interface Cachorro_01 {
    nome: string;
}

interface Gato {
    idade: number;
}

interface Animal_01 extends Cachorro_01, Gato {
    porte: number;
}

const animal: Animal_01 = {
    nome: "Farora",
    idade: 4,
    porte: 0.6
}

console.log(animal)

// ==> Exemplo 03

interface Funcionario {
    id: number;
    nome: string;
    salario: number;
}

interface Desenvolvedor extends Omit<Funcionario, 'id'> {
    id: string;
    linguagem: string;
}

const funcionario: Desenvolvedor = {
    id: '1n23j-3123nb',
    nome: 'Bruno',
    salario: 1289,
    linguagem: 'TypeScript'
}

console.log(funcionario)
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

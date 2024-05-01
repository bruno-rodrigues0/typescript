/* eslint-disable prefer-const */
// ==> Exemplo 01: Tipo unknown

let valorVariavel: unknown;

valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Oi!';

console.log(valorVariavel);

// ==> Exemplo 02

// let valor : unknown;

// let valor1: boolean = valor;
// let valor1: number = valor;
// let valor1: any = valor;
// let valor1: any[] = valor;
// let valor1: string = valor;

// console.log(valor1);

// ==> Exemplo 03

// let algumaCoisaAny: any;

let algumaCoisaUnknown: unknown;

algumaCoisaUnknown = 78;

if(typeof algumaCoisaUnknown === 'number'){
    console.log(algumaCoisaUnknown.toFixed());
}
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

// ==> Exemplo 01

const olaMundo = (name?: string | undefined): void => {
    console.log(`Olá, ${ name || 'Dev' }!`);
}

olaMundo('');

// ==> Examplo 02

let variavelExemploVoid: void;
variavelExemploVoid = null; // with strictNullChecks disabled
variavelExemploVoid = undefined;

console.log(variavelExemploVoid);


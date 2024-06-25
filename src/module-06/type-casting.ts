export = {}

const valor: unknown = "Ola mundo";

console.log((valor as string).length);
console.log((<string>valor).length);

// Exemplo 2

const carro = 'Fusca';

const tamahoString: number = (<string>carro).length;


console.log("O tamanho da string eh : ", tamahoString);

// Exemplo 3

const value = <HTMLElement>document.getElementById('input');

console.log(value);

// => Variables [Type Annotation]

let nome: string = 'Bruno Rodrigues';
console.log(nome);

// => Arrays [Type Annotation]

let animais: string[] = ['Elefante', 'Gato', 'Cachorro', 'Panda'];
console.log(animais);

// => Objects [Type Annotation]

let carro: {
    nome: string;
    ano: number;
    preco: number
};

carro = {nome: 'Toyota Supra', ano: 2020, preco: 500000.00};
console.log(carro);

// => Functions [Type Annotation]

function multiplicarNumeros(num1: number, num2: number) : number{
    return num1 * num2;
}
console.log(multiplicarNumeros(2, 4));


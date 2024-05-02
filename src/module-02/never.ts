// ==> Exemplo 01

const error = (message: string): never => {
    throw new Error(message)
}

console.log(error('Error message'))

// ==> Exemplo 02

const rejectMessage = () => {
    return error('Error message - 02');
}

console.log(rejectMessage());

// ==> Exemplo 03

const infinityLoop = () => {
    // eslint-disable-next-line no-constant-condition
    while(true){
        console.log('Oi, Dev!');
    }
}

infinityLoop();

// ==>  Exemplo 04

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let anyNever: never;
// console.log(anyNever);
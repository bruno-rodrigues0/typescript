//* Exercicio -> Inferencia de tipos no TypeScript

// let x: number;  //* Explicitly delcares x as a number type
// let y = 1;      //* Implicitly delcares y as a number type
// let z;          //* Declares z without initializing it

//* Tipos primitivos no TypeScript

//* Boolean

let flag: boolean;
let yes = true;
let no = false;

//* Number e Bigint

let x: number;
let y = 0;
let z: number = 123.456;
let big: bigint = 100n;

//* String

let s: string;
let empty = "";
let abc = "abc";

let firstName: string = "Bruno";
let sentence: string = `My name is ${firstName}.
I am new to TypeScript.`;

console.log(sentence);

//* Exercício -> enumerações

enum ContractStatus {
    Permanent,
    Temp,
    Apprentice,
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);

//* Tipos any e unknown no TypeScript

let randomValue: unknown = 10;
randomValue = true;
randomValue = "Mateo";

// console.log(randomValue.name);  //* Error: Object is of type unknown
// randomValue();                  //* Error: Object is of type unknown
// randomValue.toUpperCase();      //* Error: Object is of type unknown

//* Asserção de tipo

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase()); //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here."); //* Returns an error message.
}

//* Tipos de união e enterseção no TyeScript

//* Tipos de união

let multiType: number | boolean;
multiType = 20;                     //* Valid
multiType = true;                   //* Valid
// multiType = 'twenty'             //* Invalid

function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
console.log(add('one', 2));      //* Returns error

//* Tipos de interseção

interface Employee {
    employeeID:  number;
    age: number
}

interface Manager {
    stockPlan: boolean;
}

type ManagementEmployee = Employee & Manager;

let newManager: ManagementEmployee = {
    employeeID: 14215,
    age: 34,
    stockPlan: true
}

//* Tipos literais

type testResult = 'pass' | 'fail' | 'imcomplete';

let myResult: testResult;
myResult = 'fail';                  //* Valid
myResult = 'imcomplete';            //* Valid
// myResult = 'failure'                //* Invalid



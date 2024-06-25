export = {}

const valor: unknown = "Ola mundo";

console.log((valor as string).length);
console.log((<string>valor).length);


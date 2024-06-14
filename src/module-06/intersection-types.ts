export {}

// ==> Exemplo 01

interface DadosBancarios {
    conta: number;
    agencia: number;
    banco: string;
}

interface Cliente {
    nome: string;
    email: string;
}

interface DadosPessoaFisica {
    cpf: string;
}

type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisica;

const dadosClintes: DadosCliente = {
    conta: 1241,
    agencia: 124,
    banco: "Banco do Brasil",
    nome: "Bruno",
    email: "brunorodriguesmtc0@gmail.com",
    cpf: "100.793.456-54"
}

console.log(dadosClintes)





// ==> Exemplo 02
















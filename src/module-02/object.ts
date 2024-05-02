// ==> Exemplo 01 -> uso básico de object
export { };


const pessoa = {
    nome: 'Bruno',
    sobrenome: 'Rodrigues',
    idade: 17,
    funcao: 'Estudante'
}

// console.log(pessoa);

// ==> Exemlo 02 -> ebject como parametro de função

const onBoarding01 = (funcionario: { nome:  string }) => {
    return 'Seja bem-vindo ' + funcionario.nome;
}

console.log(onBoarding01(pessoa));
console.log(onBoarding01({ nome: 'Gabriel' }));

// ==> Exemplo 03 -> object nomeados

interface Pessoa {
    nome: string;
    funcao: string;
}

const onBoarding02 = (pessoa: Pessoa) => {
   return (
    'Seja bem-vindo ' +
    pessoa.nome + 
    '!' + 
    ' Sua função aqui na empresa será ' + 
    pessoa.funcao + 
    '.'
   );
}

console.log(onBoarding02({ nome: 'Bruno', funcao: 'Cloud Advocate TypeScript'}));

// ==> Exemplo 04 -> object com type alias

type Pessoa03 = {
    nome: string;
    funcao: string;
    linguagem: string;
}

const onBoarding03 = (pessoa: Pessoa03) => {
    return (
     'Seja bem-vindo ' +
     pessoa.nome + 
     '!' + 
     ' Sua função aqui na empresa será ' + 
     pessoa.funcao + 
     '.' + 
     ' Voce trabalhará com a linguagem' + 
     pessoa.linguagem
    );
 }

 console.log(onBoarding03({ nome: 'Bruno', funcao: 'Cloud Advocate TypeScript', linguagem: 'TypeScript'}));

 // ==> Exemplo 05 -> usando optinal no object

 interface Pessoa04 {
    nome: string;
    funcao: string;
    linguagem: string;
    email?: string;
 }

 const onBoarding04 = (pessoa: Pessoa04) => {
    return (
     'Seja bem-vindo ' +
     pessoa.nome + 
     '!' + 
     ' Sua função aqui na empresa será ' + 
     pessoa.funcao + 
     '.' + 
     ' Voce trabalhará com a linguagem ' + 
     pessoa.linguagem +
     '.'
    );
 }

 console.log(onBoarding04({ nome: 'Bruno', funcao: 'Cloud Advocate TypeScript', linguagem: 'TypeScript'}));

 // ==> Exemplo readonly 

 
 interface Pessoa05 {
    nome: string;
    funcao: string;
    linguagem: string;
    readonly email: string;
 }

 const onBoarding05 = (pessoa: Pessoa05) => {

    return (
     'Seja bem-vindo ' +
     pessoa.nome + 
     '!' + 
     ' Sua função aqui na empresa será ' + 
     pessoa.funcao + 
     '.' + 
     ' Voce trabalhará com a linguagem ' + 
     pessoa.linguagem +
     '.' +
     ' Seu email será ' +
     pessoa.email
    );
 }

 console.log(onBoarding05({ nome: 'Bruno', funcao: 'Cloud Advocate TypeScript', linguagem: 'TypeScript', email: 'brunorodriguesmtv0@gmail.com'}));

 // ==> Exemplo 07 ->  tipos de extensões

 interface Mae {
    nome: string;
 }

 interface Pai {
    sobrenome: string;
 }

 interface Filha extends Pai, Mae{
    idade: number;
 }

 const filha: Filha = {
    nome: 'Bruno',
    sobrenome: 'Rodrigues',
    idade: 17
 }

 console.log(filha)

 // ==> Eemplo 08 -> tipoes de interseções

//  interface Cachorro {
//     tipo: string;
//  }

//  interface Gato {
//     tipo: string;
//  }

//  type Animal = Cachorro & Gato;

 // ==> Exemplo 09 -> Generic objects

 type Usuario = {
    nome: string;
    email: string;
 }

type Admin = {
    nome: string;
    email: string;
    admin: true;
}

 const usuario: Usuario = {
    nome: 'Bruno Rodrigues',
    email: 'brunorodrigues@gmail.com'
 }
 const admin: Admin = {
    nome: 'Bruno Rodrigues',
    email: 'brunorodrigues@gmail.com',
    admin: true
 }

 function acessarSistema<T>(usuario: T){
    return typeof usuario;
 }

 console.log(acessarSistema<Usuario>(usuario));
 console.log(acessarSistema<Admin>(admin));





//  function acessarSistema(usuario:Usuario): Usuario {
//     return usuario;
//  }

//  console.log(acessarSistema(usuario));


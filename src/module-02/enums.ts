// ==> Exemplo 01

enum  Idioma {
    Portugues,
    Espanhol,
    Ingles,
    Frances
};

// console.log(Idioma);

// ==> Exemplo 01

enum Dia {
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM'
};

// console.log(Dia.Segunda);
// console.log(Dia);

// ==> Exemplo 01

const enum Comida {
    Hamburger = 'Hamburger',
    Massa = 'Massa',
    Pizza = 'Pizza',
    Torta = 'Torta',
    Churras = 'Churras'
}

function comida (c: Comida){
    return 'Comidas muito apetitosas';
}

// console.log(comida(Comida.Pizza));
// console.log(comida(Comida.Churras));
// console.log(comida(Comida.Hamburger));

// ==> Exemplo 01

enum Tarefa {
    Todo,
    Progress,
    Done
}

const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    description: 'Parabéns, tarefa concluida'
};

if(concluidaTarefa.status === Tarefa.Done){
    console.log('Enviar e-mail: tarefa concluida!');
}

function somarNumeros(...numeros: number[]){
    let total = 0;
    numeros.forEach(numero => total += numero);
    return total;
}

console.log(somarNumeros(3, 5, 1, 5, 2, 5, 1, 32 ,5 ));

// ==> Exemplo 02

function listarFrutas (frase: string, ...frutas: string[]){
    return frase + ' ' + frutas.join(', ');
}

console.log(listarFrutas("tu tem q ir na feira e comprar", 'laranja', 'maçã', 'pera', 'banana'));

// ==> Exemplo 03

class Produtos {
    public exibirProdutos(...produtos: string[]): void{
        produtos.map(produto => console.log(produto));
    }
}

const departamentoInformatica: Produtos = new Produtos();
console.log(
    'Todos os produtos do departamento de informática disponíveis no estoque ... :',
);

departamentoInformatica.exibirProdutos(
    'mouse',
    'notebook',
    'usb',
    'monitor',
    'teclado',
    'webcam'
);

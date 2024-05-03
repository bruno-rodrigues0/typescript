export { }

class Quadrado {
    private _altura: number = 6;
    private _largura: number = 12;

    get area(){
        return this._altura * this._largura;
    }

    set altura(altura: number){
        this._altura = altura
    }

    set largura(largura: number){
        this._largura = largura
    }
}

const quadrado = new Quadrado();

quadrado.altura = 12;
quadrado.largura = 8;

console.log(quadrado.area);
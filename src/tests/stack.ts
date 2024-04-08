/* eslint-disable @typescript-eslint/no-explicit-any */

export default class Stack<T>{

    private count: number;
    private items: any;

    constructor(){
        this.count = 0;
        this.items = {};
    }

    push(element: T){
        this.items[this.count] = element;
        this.count++;
    }
    
    pop() : any{
        if(this.isEmpty()){
            return undefined;
        }

        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];

        return result;

    }

    isEmpty() : boolean{
        if(this.size()){
            return true;
        }

        return false;
    }

    peek(){
        return this.items[this.count];
    }

    size(){
        return this.count;
    }

    clear(){
        this.count = 0;
        this.items = {};
    }

    toString() : string{
        if(this.isEmpty()){
            return '';
        }

        let string : string = `${this.items[0]}`;
        for(let i = 1; i < this.count; i++){
            string += `, ${this.items[i]}`;
        }

        return string;
    }
    
}
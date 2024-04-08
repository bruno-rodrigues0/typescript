import Stack from "./stack";

export default function baseConverter(value: number, base: number = 2){
    if(!(value) || base < 2 || base > 36){
        return undefined;
    }

    const characters : string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const stack = new Stack();
    let binaryString : string = '';
    let number  = value;
    let rem : number;

    while(number > 0){
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }

    while(!stack.isEmpty){
        binaryString += characters[stack.pop()];
    }

    return binaryString;
}

console.log(baseConverter(10, 2));
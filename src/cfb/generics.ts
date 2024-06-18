"use strict"

function f_teste<T> (value: T): T{
    return value;
}

console.log(f_teste<number>(34))
console.log(f_teste<string>("34"))

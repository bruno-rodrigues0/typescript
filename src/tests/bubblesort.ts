export = {}

let array = [67, 2, 43, 2, 74, 57, 1, 7, 4, 61, 8 , 48]
let swap = 0;
const total = array.length

const sort = () => {
    for (let i = 0; i < total - 1; i++){
        for(let j = 0; j < total - i - 1; j++) {
            if(array[j] > array[j + 1]) {
                swap = array[j]
                array[j] = array[j + 1]
                array[j + 1] = swap
            }
        }
    }
}

console.log(array);
sort()
console.log(array);


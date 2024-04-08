"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stack_1 = require("./stack");
function baseConverter(value, base) {
    if (base === void 0) { base = 2; }
    if (!(value) || base < 2 || base > 36) {
        return undefined;
    }
    var characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var stack = new stack_1.default();
    var binaryString = '';
    var number = value;
    var rem;
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty) {
        binaryString += characters[stack.pop()];
    }
    return binaryString;
}
exports.default = baseConverter;
console.log(baseConverter(10, 2));

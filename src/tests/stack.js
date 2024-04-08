"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack() {
        this.count = 0;
        this.items = {};
    }
    Stack.prototype.push = function (element) {
        this.items[this.count] = element;
        this.count++;
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        var result = this.items[this.count];
        delete this.items[this.count];
        return result;
    };
    Stack.prototype.isEmpty = function () {
        if (this.size()) {
            return true;
        }
        return false;
    };
    Stack.prototype.peek = function () {
        return this.items[this.count];
    };
    Stack.prototype.size = function () {
        return this.count;
    };
    Stack.prototype.clear = function () {
        this.count = 0;
        this.items = {};
    };
    Stack.prototype.toString = function () {
        if (this.isEmpty()) {
            return '';
        }
        var string = "".concat(this.items[0]);
        for (var i = 1; i < this.count; i++) {
            string += ", ".concat(this.items[i]);
        }
        return string;
    };
    return Stack;
}());
exports.default = Stack;

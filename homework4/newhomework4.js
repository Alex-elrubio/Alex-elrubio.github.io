"use strict"
let name;
let age;
let role;
let occupation;

console.log((age > 18) && !!name);
console.log(occupation !== 'CEO' && role === 'Admin');
console.log(occupation ?? role);
console.log(((age > 18) && !!name) || role === 'Admin');
console.log(role !== 'Admin' && !!name && age);


const value1 = +prompt('введите число', '0');
const value2 = +prompt('введите число', '0');
const operator = prompt('введите действие', '+');

let error;
let result;
if (isNaN(value1)) || isNaN(value2)) {
    error = 'не правильное значение';
}
switch(operator){
    case('+'):
        result = value1 + value2;
        break;
    case('-'):
        result = value1 - value2;
        break;
    case('/'):
        result = value1 / value2;
        break;
    case('*'):
        result = value1 * value2;
        break;
    case('**'):
        result = value1 ** value2;
        break;
    case('OMG'):
        if (value2 < 1) {
            error = 'value 2 should be more than 1';
        }

        const truncedValue1 = Math.trunc(value1);
        const truncedValue2 = Math.trunc(value2);

        const calcedValue = Math.round(truncedValue1 / truncedValue2) * truncedValue2;

        result = Math.max(truncedValue2, calcedValue);
        break;
    default:
            error = 'Invalid Operator'
} 

console.log(error ?? result);
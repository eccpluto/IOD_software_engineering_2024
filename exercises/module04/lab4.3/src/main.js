/**
 * Calculator script - essentially a model using mvc architecture
 */

// data buffer
let calculatorModel = {
    value: '',
    op: '', // operator
};

// Exposed function that can be called from the frontend (controller code)
function Calculate(input) {
    let operator = getOperatorFromInput(input);
    let x = input.substring(0, input.indexOf(operator));
    let y = input.substring(x.length + 1); // use the length of x value to determine start


    switch (operator) {
        case '+':
            return Add(x, y);
        case '-':
            return Subtract(x, y);
        case '/':
            return Divide(x, y);
        case '*':
            return Multiply(x, y);
        default:
            break;
    }
}

// should test for single occurance of these operators in the input string (duplicates too)
function getOperatorFromInput(input) {
    if (input.indexOf('+') != -1) { return '+' }

    if (input.indexOf('-') != -1) { return '-' }

    if (input.indexOf('/') != -1) { return '/' }

    if (input.indexOf('*') != -1) { return '*' }

    alert("can only do operations with two numbers in the form: <x><operator><y><equals>");
}

// Core calculator functions
function Add(x, y) {
    return Number(x) + Number(y);
}

function Subtract(x, y) {
    return Number(x) - Number(y);
}

function Multiply(x, y) {
    return Number(x) * Number(y);
}

function Divide(x, y) {
    return Number(x) / Number(y);
}
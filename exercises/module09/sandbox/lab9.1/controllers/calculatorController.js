const calculator = require('../libraries/calculator');
const myCalc = new calculator();

function add(req, res) {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.add(number1, number2);
    console.log(sum);
    res.status(200);
    res.json({
        result: sum
    });
};

function subtract(req, res) {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.subtract(number1, number2);
    console.log(sum);
    res.status(200);
    res.json({
        result: sum
    });
};

function multiply(req, res) {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.multiply(number1, number2);
    console.log(sum);
    res.status(200);
    res.json({
        result: sum
    });
};

function divide(req, res) {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.divide(number1, number2);
    console.log(sum);
    res.status(200);
    res.json({
        result: sum
    });
};

module.exports = { add, subtract, multiply, divide };
function subtract(a, b) {
    return a - b;
}

function add(a, b) {
    return a + b;
}

function divide(a, b) {
    if (b==0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function say_hello(name) {
    console.log("Hello " + name);
}


let x = 3;
let y = 5;

console.log(subtract(x, y));
console.log(add(x, y));
console.log(divide(x, y)); // will error if y is 0.
console.log(multiply(x, y));

say_hello("Clarice");
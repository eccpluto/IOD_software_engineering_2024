// this function returns the result of subtracting the second parameter from the first
function subtract(a, b) {
    return a - b;
}

// this function returns the sum of two numbers
function add(a, b) {
    return a + b;
}

// TODO this function returns
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
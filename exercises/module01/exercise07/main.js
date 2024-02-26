// this function returns the result of subtracting the second parameter from the first
function subtract(a, b) {
    return a - b;
}

// this function returns the sum of two numbers
function add(a, b) {
    return a + b;
}

// this function returns the result of dividing the first argument into the second
function divide(a, b) {
    if (b==0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}

// this function returns the result of multiplying the two arguments together
function multiply(a, b) {
    return a * b;
}

// this function with greet the person via the console, given a name argument
function say_hello(name) {
    console.log("Hello " + name);
}

// testing our functions

// subtraction
if (subtract(0,0) != 0) { throw new Error };
if (subtract(0,1) != -1) { throw new Error };
if (subtract(1,0) != 1) { throw new Error };
if (subtract(1,1) != 0) { throw new Error };

// add
if (add(0,0) != 0) { throw new Error };
if (add(-1,1) != 0) { throw new Error };
if (add(-2,-3) != -5) { throw new Error };
if (add(2,3) != 5) { throw new Error };


// divide
if (divide(1, 1) != 1) { throw new Error };
if (divide(0, 99999) != 0) { throw new Error };
if (divide(1, -1) != -1) { throw new Error };


// console.log(divide(10,3));
// if (divide(10, 3) != 1){ throw new Error };
// if (divide(1, 0) != error) { error };

if (multiply(1,1) != 1) { throw new Error };
if (multiply(0,1) != 0) { throw new Error };
if (multiply(10,-1) != -10) { throw new Error };
if (multiply(-1,-1) != 1) { throw new Error };
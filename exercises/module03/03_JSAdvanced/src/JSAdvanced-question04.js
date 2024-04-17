/**
 * The Fibonacci sequence is a sequence where the next number is the sum of the previous 2:
 * 1, 1, 2, 3, 5, 8, ...
 */


// a)
/**
 * @param {Number} [limit=0] how many iterations of the sequence to perform, default is INFINITY.
 * @description prints the Finbonacci sequence, 1 element each second, to the console.
 */
function printFibonacci(limit = -1) {
    let valNext = 1; // second element in Fibonacci sequence
    let valPrev = 1; // first element in Fibonacci sequence
    let valCurrent;
    let limitCounter = limit; // store the limit, which acts as a flag for infinity if value is -1
    function fibonacci() {
        // store the current value
        valCurrent = valNext;
        // update the next value with the sum of the previous 2
        valNext = valNext + valPrev;
        // make the new previous value equal to the current
        valPrev = valCurrent;
        // print the current value
        console.log(valCurrent);

        // stop the interval timer if we are approacing the limit (and limit isnt infinity)
        if (limitCounter != -1 && limitCounter > 0) {
            limitCounter--;
        };
        if (limitCounter == 0)
            clearInterval(fibonacciTimer);
    }

    // store a reference to the timer so we can cancel it if we have a limit
    const fibonacciTimer = setInterval(fibonacci, 1000);
}

// TEST ME
// printFibonacci();

// b)
/**
 * @description prints the Finbonacci sequence, 1 element each second, to the console.
 */
function printFibonacciTimeouts(limit = 0) {
    let valNext = 1; // second element in Fibonacci sequence
    let valPrev = 1; // first element in Fibonacci sequence
    let valCurrent;
    function fibonacci() {
        // store the current value
        valCurrent = valNext;
        // update the next value with the sum of the previous 2
        valNext = valNext + valPrev;
        // make the new previous value equal to the current
        valPrev = valCurrent;
        // print the current value
        console.log(valCurrent);

        // call recursively
        setTimeout(fibonacci, 1000);
    }

    // initiate the sequence
    fibonacci();
}

// TEST ME
// printFibonacciTimeouts();

// c) modified the first function code to accept a limit
// TEST ME
// printFibonacci(8); // prints the first 8 values in the sequence
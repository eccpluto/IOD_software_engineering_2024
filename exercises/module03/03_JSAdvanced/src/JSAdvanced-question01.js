/**
 * makeCounter below is a decorator function which creates and returns a function that increments a counter.
 */

/**
 * 
 * @param {Number} startFrom integer, will default to 0.
 * @param {Number} incrementBy integer, will default to 1.
 * @returns a function that will increment a counter when called.
 */
function makeCounter(startFrom = 0, incrementBy = 1) {
    let currentCount = startFrom;
    let increment = incrementBy;

    return function () {
        currentCount = currentCount + incrementBy;
        console.log(currentCount);
        return currentCount;
    }
}

// a) see if these counters remain independent.
// as we are calling makeCounter twice, we are returning two separate instances of the function - with their own currentCount variables.
let counter1 = makeCounter();
let counter2 = makeCounter();

counter1(); // 1
counter2(); // 1
counter2(); // 2 
counter2(); // 3

counter1(); // 2, so yes these counters remain independent. 

// b) modify makeCounter so it takes an argument startFrom specifying where the counter starts from, instead of always from zero. See above function.
const counter3 = makeCounter(4);

counter3(); // 5
counter3(); // 6

// c) modify makeCounter to take another argument incrementBy, which specifies how much each call to the function shouild increase the counter value by.
// See above function.
const counter4 = makeCounter(3, 5);

counter4(); // 8
counter4(); // 13
counter4(); // 18
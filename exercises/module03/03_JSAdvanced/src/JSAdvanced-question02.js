/**
 * The following delayMsg function is intended to be used to delay printing a message until some time has passed.
 */

delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`)
}

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all');

// a) These will be printed in the order #4, #3, #2, #1.
// #4 is a direct function call, and will be executed in place.
// #3, #2, #1, are all delayed by increasing durations, and will execute from the shortest to longest delay

// b) rewrite delayMsg as an arrow function. See above

// c) add a fifth test which uses a large delay time (greater tahn 10 seconds)

const timeout5 = setTimeout(delayMsg, 10000, '#5: Delayed by 10 seconds');

// d) prevent the fifth test from being called by using clearTimeout

clearTimeout(timeout5);
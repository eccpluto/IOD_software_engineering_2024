/**
 * Debouncing is a concept that refers to putting off the execution of multiple fast-timed, similar requests until there is a brief pause,
 * then only executing the most recent of those requests. This is often used to prevent multiple server requests from fast-firing events such
 * as page scrolling in a browser.
 */

function printMe(msg = 'printing debounced message') {
    console.log(msg)
}

// a) 
/**
 * 
 * @param {Function} func to have debouncing behaviour applied.
 * @param {Number} ms time in milliseconds to debounce between successive calls to func. Defaults to 1000 (1 second).
 * @returns callable function that will debounce with a wait time of 1 second.
 */
function debounce(func, ms = 1000) {
    // delcare a coolDownTimer which will allow us to store time since last call to the debounced function
    let coolDownTimer;
    return function () {
        // re-init the cool down timer
        clearTimeout(coolDownTimer);
        // re-call the decorated function after a 1 second delay
        coolDownTimer = setTimeout(() => func.apply(this, arguments), ms);
    }
}

// TEST ME
// printMe = debounce(printMe); //create this debounce function for a)
// // fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
// setTimeout(printMe, 100); // coolDownTimer reset -> printMe will call after ~1100ms
// setTimeout(printMe, 200); // coolDownTimer reset (disables previous call) -> printMe will execute after ~1200ms
// setTimeout(printMe, 300); // coolDownTimer reset (disables previous call) -> printMe will execute after ~1300ms

// b) Extend the debounce decorator function above to take a second argument ms, which defines the length
// of the period of inactivity instead of hardcoding to 1000ms - See above.

// TEST ME
// printMe = debounce(printMe, 150);
// setTimeout(printMe, 200); // coolDownTimer reset -> printMe will execute after ~350ms
// setTimeout(printMe, 300); // coolDownTimer reset (disables previous call) -> printMe will execute after ~450ms
// setTimeout(printMe, 800); // coolDownTimer reset -> printMe will execute after ~950ms

// c) Extend debounce to allow the original debounced function printMe to take an argument msg which is
// included in the console.log statement - See original function.

// TEST ME
// printMe = debounce(printMe, 1000);
// setTimeout(printMe, 100, 'timeout set to 100ms'); // coolDownTimer reset -> printMe will call after ~1100ms
// setTimeout(printMe, 200, 'timeout set to 200ms'); // coolDownTimer reset (disables previous call) -> printMe will execute after ~1200ms
// setTimeout(printMe, 300, 'timeout set to 300ms'); // coolDownTimer reset (disables previous call) -> printMe will execute after ~1300ms
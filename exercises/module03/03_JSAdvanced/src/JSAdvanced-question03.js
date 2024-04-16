/**
 * Debouncing is a concept that refers to putting off the execution of multiple fast-timed, similar requests until there is a brief pause,
 * then only executing the most recent of those requests. This is often used to prevent multiple server requests from fast-firing events such
 * as page scrolling in a browser.
 */

function printMe() {
    console.log('printing debounced message')
}

// need to restart an internal cooldown timer each time the debounced function is called
function debounce(func) {
    // delcare a coolDown variable, which will become a timer when the returned function is called
    let coolDown;
    return function () {
        clearTimeout(coolDown);
        // initialise the coolDown timer
        coolDown = setTimeout(() => func.apply(this, arguments));
    }
}

// note this is defefining, not redeclaring hence no variable qualifier (const, let, var)
printMe = debounce(printMe); //create this debounce function for a)

// fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);
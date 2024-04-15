/**
 * Create a function, unique(duplicatesArray) which takes an array parameter
 * that may include duplicates. Your function should
 * return an array containing only the unique values from
 * duplicatesArray. Test using the provided arrays alongisde one of your own
 */

/** 
 * Strategies:
 * 1 - sort the array, then loop through elements i in array keeping
 * track of a previous (i - 1) element. If array[i-1]
 * differs from array[i], update trackedElement and 
 * add to result. if array[i-1] matches array[i], then 
 * don't add to result, and continue loop.
 * 
 * 2 - keep an array of seenElements, and then
 * use some sort of if( seenElements.hasA(array[i+1]))
 * condition to see if we need append seenElements.
 * result = seenElements.
 */

// function unique(duplicatesArray) {
//     // sort elements by ASCII characters ascending
//     Array(duplicatesArray).sort();
//     // store first element as basline
//     let trackedElement = duplicatesArray[0]
//     let resultArray = [];
//     resultArray.push(duplicatesArray[0]);
//     duplicatesArray.forEach(element => {
//         if (trackedElement != element) {
//             // update
//             trackedElement = element;
//             resultArray.push(trackedElement);
//         };
//     });
//     return resultArray;
// }

function unique(duplicatesArray) {
    // this will collect only seen elements, and be returned
    let seenElements = [];
    duplicatesArray.forEach(element => {
        if (!seenElements.includes(element)) {
            seenElements.push(element);
        }
    });
    return seenElements;
}
// provieded test arrays:
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const testBooleans = [true, true, true];
// note this doesn't work as expected because these
// are reference types, and therefor hold different
// addresses in memory (different array values)
// const testObjects = [{name: 'mike'}, {name: 'mike'}, {name: 'john'}];
const testParticles = ['neutrino', 'positron', 'alpha', 'neutrino', 'positron'];

console.log(unique(colours));
console.log(unique(testScores));
console.log(unique(testBooleans));
// console.log(unique(testObjects));
console.log(unique(testParticles));
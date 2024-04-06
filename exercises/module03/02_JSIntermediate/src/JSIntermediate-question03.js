/**
 * Use the following animals array for the below tasks. Test each one by printing the result to the console.
 * Review the following link for more tips: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * 
 */

const animals = ['Tiger', 'Giraffe'];
console.log(animals);

// a) Add 2 new values to the end:
animals.push('porpoise', 'Porcupine');
console.log(animals)

// b) Add 2 new values to the beginning
animals.unshift('Horse', 'Cow');
console.log(animals);

// c) Sort the values aphabetically
animals.sort();
console.log(animals);

// d) Write a function that replaces the value in the middle of the animals array with newValue

/**
 * 
 * @param {string} newValue 
 * @description Replaces the middle value inside an array 'animals', defined externally in the global scope.
 */
function replaceMiddleAnimal(newValue) {
    // get the middle index ( could have just said 2 or 3 here )
    let middleIndex = Math.floor(animals.length / 2);
    animals[middleIndex - 1] = newValue;
}

replaceMiddleAnimal('Whale');
console.log(animals);

// e) Write a function that returns a new array containing all the animals that begin with the beginsWith string. Try making it work regardless or casing.

/**
 * 
 * @param {string} beginsWith is the string to match the begining of animal names against.
 * @returns An array containing all the animals that begin with the given string (not case-sensitive). Can return an empty array.
 */
function findMatchingAnimals(beginsWith) {
    beginsWith = String(beginsWith).toUpperCase();
    result = [];
    animals.forEach(animal => {
        if (animal.toUpperCase().startsWith(beginsWith)) { result.push(animal); }
    })
    return result;
}

console.log(findMatchingAnimals('w'));
console.log(findMatchingAnimals('')); // Returns all animals
console.log(findMatchingAnimals('p')); // matches both casings
console.log(findMatchingAnimals('j')); // empty array, same as providing no argument
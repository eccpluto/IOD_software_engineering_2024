/**
 * Question 01:
 * 
 * Create a function that takes a string as a parameter and returns the string
 * with the first character of each word changed into a capital letter,
 * as in the example below. Test it with different strings
 * 
 * console.log(ucFirstLetters("los angeles") ) //Los Angeles
 */


/**
 * 
 * @param {string} inString 
 * @returns A new string which is the inString with the first letter of each word capitalised
 */
function capitaliseWords(inString) {
    // quick exit if no args provided - should probably raise warning
    // this is different to an empty string as an argument
    if (inString == undefined) {
        return;
    }

    let words = inString.split(" ");
    let outString = "";
    words.forEach(word => {
        // isolate leading character, and splice back into remaining substring
        outString += word.slice(0, 1).toUpperCase() + word.substring(1) + " ";
        
    });
    // there will always be some trailing whitespace that needs to be removed
    return outString.trim();
}

console.log(capitaliseWords("capitalise my words please"));
console.log(capitaliseWords("this 1 string 3 contains 3 numbers"));
console.log(capitaliseWords()); // provide no arguments
console.log(capitaliseWords("")); // provide empty string
console.log(capitaliseWords("!@#$>.")); // provide some special sybmols
console.log(capitaliseWords("I alreaDY conTained Some Capitalised letters"));
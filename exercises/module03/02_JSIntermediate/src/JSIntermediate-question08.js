/**
 * The following code creates a new Map object to store names beginning with A, B or C
 * with their phone numbers
 */

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

// a) and b)
const phoneBookDEF = new Map([['Dimitri', '071236345'], ['Emerson', '045928401'], ['Francois', '043522344']]);
console.log(phoneBookDEF);

// c)
phoneBookABC.set('Caroline', '0412312312');
console.log(phoneBookABC);

// d)
/**
 * @param {Map} contacts represnting a phonebook.
 */
function printPhoneBook(contacts) {
    contacts.forEach((value, key) => {
        console.log(`${key} has phone number: ${value}`);
    });
}
// printPhoneBook(phoneBookABC);

// e)
// to combine the maps, we can use an array initialisation, and spread syntax
// to populate the array with the elements in each map
const phoneBookABCDEF = new Map([...phoneBookABC, ...phoneBookDEF])

// f)
console.log(phoneBookABCDEF);
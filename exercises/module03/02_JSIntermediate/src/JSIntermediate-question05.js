/**
 * Decimal number operations in JavaScript
 * can led to unexpected results, such as:
 */

let twentyCents = 0.20;
let tenCents = 0.10;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004

/**
 * We can sometimes avoid this using the toFixed function to force the number of
 * decimal places as below, but it's not always useful:
 */

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen);

// a)
// the above code does not work as intended because Number.toFixed() returns a String
// the two strings are then concatenated i.e. '0.20' + '0.10' = '0.200.10'

// b)
/**
 * 
 * @param {Number} float1 
 * @param {Number} float2 
 * @returns Float value which is the addition of the two supplied arguments,
 * rounded to 2 decimal places
 */
function currencyAddition(float1, float2) {
    let result = float1 + float2;
    // round to 2dp, which also converts to String
    result = result.toFixed(2);
    // cast back to Number and return
    return Number(result);
}

console.log(currencyAddition(0.2, 0.1));

// c)
/**
 * 
 * @param {Number} float1 
 * @param {Number} float2 
 * @param {Number} precision number of decimal places to round to, [1-10] are valid
 * @param {String} operation binary operation, '+', '-', '/' or '*' are valid
 * @returns {String} string result of operation, rounded to 2dp. Not a number as this won't indicate precision visually.
 */
function currencyOperation(float1, float2, operation, precision) {
    if (!(0 < precision && precision < 11)) {
        console.log('Precision must be between 1 and 10.');
        return;
    }
    switch (operation) {
        case '+':
            return (float1 + float2).toFixed(precision);
        case '-':
            return (float1 - float2).toFixed(precision);
        case '/':
            return (float1 / float2).toFixed(precision);
        case '*':
            return (float1 * float2).toFixed(precision);
        default:
            break;
    }
}

console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+', 2)) // true

console.log(`Currency addition:\t\t${currencyOperation(0.1, 0.2, '+', 5)}`);
console.log(`Currency subtraction:\t\t${currencyOperation(0.1, 0.2, '-', 4)}`);
console.log(`Currency division:\t\t${currencyOperation(0.1, 0.2, '/', 3)}`);
console.log(`Currency multiplication:\t${currencyOperation(0.1, 0.2, '*', 2)}`);

// this will log a message to console that precision is out of range, and the function will return undefined
console.log(`currency operation out of precision tolerance:\t\t${currencyOperation(1.0, 2.0, '+', 11)}`);
console.log("Question 01: results of expressions:\n");

console.log("" + 1 + 0);    // seeing a string first, will concatenate component into a string
console.log("" - 1 + 0);    // will do math operation, since the hyphen is subtraction operator
console.log(true + false);  // booleans will be cast to numerical values 1 and zero when operated on by +
console.log(!true);         // negates true, hence prints false
console.log(6 / "3");       // converts string "3" to number and returns the number 2
console.log("2" * "3");     // converts strings to their numbers, and performs multiplication to get 6
console.log(4 + 5 + "px");  // seeing numbers first, will perform math on the numbers, then concatenate with string
console.log("$" + 4 + 5);   // seeing a string first, will concatenate into "$45"
console.log("4" - 2);       // will convert "4" into a number and return number 2
console.log("4px" - 2);     // will attempt to convert "4px" into a number, and return NaN
console.log(" -9 " + 5);    // will concatenate and return " -9 5"
console.log(" -9 " - 5);    // will successfully convert " -9 " to a number, and return -14
console.log(null + 1);      // will just print the number 1, as null serves to indicate something exists has no value
console.log(undefined + 1); // will attempt to add 1 to undefined, resulting in NaN
console.log(undefined == null);     // checks equivalence (value test), implicitly converts to same type, true
console.log(undefined === null);    // checks equality (value and type test), compares type directly without conversion, false
console.log(" \t \n" - 2);  /* tried to convert escape character sequences to numbers, which are ignored,
                             * resulting in -2 printed.
                            */
console.log("\nQuestion 02: diagnosing incorrect answers:\n");

let three   = "3";
let four    = "4";
let thirty  = "30";

// what is the value of the following expressions?
let addition = three + four;                            // results in "34" - this is incorrect because + acts as concatenation on strings
let additionCorrected = Number(three) + Number(four);   // converting to numbers makes the + do number addition

let multiplication = three * four;                      // results in 12;
let division = three / four;                            // results in 0.75
let subtraction = three - four;                         // results in -1

let lessThan1 = three < four;                           // results in true
let lessThan2 = thirty < four;                          // results in false - this is incorrect as the < operator only compares the first character in the string
let lessThan2Corrected = Number(thirty) < Number(four); // converting to Number type makes the operator evaluate the number and not a string

console.log(addition);
console.log(additionCorrected);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);
console.log(lessThan2Corrected);

console.log("\nWhich of the following console.log messages will print? Why?\n")

if (0) console.log('#1 zero is true')   // the ONLY numeric value of true is 1, so this will not print
if ("0") console.log('#2 zero is true') // the boolean value of any non-empty string is true, so this will print
if (null) console.log('null is true')   // null is an intentional lack of a value, and objects without a value are false
if (-1) console.log('negative is true') // -1 is a Number type of value -1, which is true (only the number 0 has a boolean value of false)
if (1) console.log('positive is true')  // 1 is the numerical value of true, so this will print

console.log("\nRewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?\n")

let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
    result += 'less than 10';
} else {
    result += 'greater than 10';
}

// using the rewritten TODO
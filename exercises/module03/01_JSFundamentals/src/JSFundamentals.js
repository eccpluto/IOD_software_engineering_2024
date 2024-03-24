// Question 01: results of expressions

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
console.log(" \t \n" - 2);  /* concatenates into a single string,
                             * performs escape character sequences resulting in -2
                             * printed 1 TAB to the right on the second line
                             */
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

let three = "3";
let four = "4";
let thirty = "30";

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

console.log("\nQuestion 03: Which of the following console.log messages will print? Why?\n")

if (0) console.log('#1 zero is true')   // the ONLY numeric value of true is 1, so this will not print
if ("0") console.log('#2 zero is true') // the boolean value of any non-empty string is true, so this will print
if (null) console.log('null is true')   // null is an intentional lack of a value, and objects without a value are false
if (-1) console.log('negative is true') // -1 is a Number type of value -1, which is true (only the number 0 has a boolean value of false)
if (1) console.log('positive is true')  // 1 is the numerical value of true, so this will print

console.log("\nQuestion 04: Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?\n")

let a = 2, b = 3;
let result = `${a} + ${b} is `;

// if (a + b < 10) {
//     result += 'less than 10';
// } else {
//     result += 'greater than 10';
// }

// console.log(result);

// same functionality using the ternary operator


(a + b < 10) ? result += "less than 10" : result += "greater than 10";

console.log(result);

console.log("\n The '+=' operator appends characters to the string.\n")

let question = "Question 05: Rewrite the following function using:\n"
question += "\n\ta)\tfunction expression syntax, and\n"
question += "\n\tb)\tarrow function syntax.\n"
question += "\n\tTest each version to make sure they work the same.\n"
console.log(question);

// original function (function delaration syntax)
function getGreeting(name) {
    return 'Hello ' + name + '!';
}
console.log(getGreeting("Chef"));

// a) using function expression syntax:
const getGreetingFunctionExpression = function (name) {
    return 'Hello ' + name + '!';
}
console.log(getGreetingFunctionExpression("Chef"));

// b) using arrrow function syntax:
const getGreetingArrowFunction = (name) => { return 'Hello ' + name + '!'; }
console.log(getGreetingArrowFunction("Chef"));


question = "\nQuestion 06:\n"
question += "\n\ta)\tComplete the inigo object by adding a lastName property and including it in the greeting.\n";
question += "\n\tb)\tComplete the getCatchPhrase so the if the person argument has 6 fingers, it instead prints his \n"
question += "\t\tfamous catch phrase (see https://www.imdb.com/title/tt0093779/characters/nm0001597).\n"
question += "\n\tc)\tUpdate getCatchPhrase to use arrow function syntax and a conditional operator.\n"
console.log(question);

const westley = {
    name: "Westley",
    numFingers: 5
}

const rugen = {
    name: "Count Rugen",
    numFingers: 6
}

const inigo = {
    firstName: "Inigo",
    lastName: "Montoya",
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}.`;
        console.log(greeting);
    },
    getCatchPhrase: (person) => {
        console.log(
            (person.numFingers != 6) ? "Nice to meet you." : "You killed my father. Prepare to die."
        );
    }
}

inigo.greeting(westley);
inigo.getCatchPhrase(westley);

inigo.greeting(rugen);
inigo.getCatchPhrase(rugen);


question = "\nQuestion 07: The following object represents a basketball game and keeps track of the score as the game procgresses.\n";
question += "\n\ta)\tModify each of the methods so that they can be 'chained' together and the last line of the example code works.\n";
question += "\n\tb)\tAdd a new method to print the full time final score.\n";
question += "\n\tc)\tAdd a new object property to keep track of the number of fouls and a method to increment it,\n";
question += "\t\tsimilar but separate to the score. Include the foul count in the hald time and full time console messages.\n";
question += "\n\td)\tTest your object by chainging all the method calls together in different combinations.\n"
console.log(question);

/**
 * Object represting a basketball game.
 */
const basketballGame = {
    score: 0,
    foulsCount: 0,
    freeThow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    halfTime() {
        console.log("Halftime score is " + this.score + ". Foul count is " + this.foulsCount);
        return this;
    },
    finalScore() {
        console.log("Full time. Final score is " + this.score + ". Foul count is " + this.foulsCount);
        return this;
    },
    foul() {
        this.foulsCount += 1;
        return this;
    }
}

// basketballGame.basket().freeThow().freeThow().basket().threePointer().halfTime();

// testing method chaining - NEED TO COMMEND OUT ABOVE LINE as scores and foulsCount are remembered
basketballGame.basket().basket().freeThow().foul().basket().threePointer().halfTime().finalScore();

question = "\nQuestion 08: The object below represents a single city.\n";
question += "\n\ta)\tWrite a function that takes an object as an argument and uses a for...in loop.\n";
question += "\t\tto access and print to the console each of those object properties and their values.\n";
question += "\t\tTest it using the sydney object below.\n";
question += "\n\tb)\tCreate a new object for a different city with different properties and call your funnction\n";
question += "\t\tagain with the new object."
console.log(question);

const sydney = {
    name: "Sydney",
    population: "5_121_000",
    state: "NSW",
    founded: "26 January 1788",
    timezone: "Australia/Sydney"
}

const  houston = {
    name: "Houston",
    population: "2_302_878",
    state: "Texas",
    founded: "August 30 1836",
    timezone: "USA/Texas/Houston"
}

const printProperties = function(object) {
    console.log("\n");
    for (const property in object) {
        console.log(`Property: ${property}, \tValue: ${object[property]}`);
    }
}

printProperties(sydney);
printProperties(houston);

question = "\nQuestion 09: The object below represents a single city.\n";
question += "\n\ta)\tCreate a new moreSports variable equal to teamSports and add some new sport values to it\n";
question += "\t\t(using push and unshift).\n";
question += "\n\tb)\tCreate a new dog2 variable equal to dog1 and give it a new value.\n";
question += "\n\tc)\tCreate a new cat2 variable equal to cat1 and change its name property.\n";
question += "\n\td)\tPrint the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?\n";
question += "\n\te)\tChange the way the moreSports and cat2 variables are created to ensure the originals remain independent.\n";
console.log(question);

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

let moreSports = teamSports;
// moreSports.push()


// todo question 10

function Person(name, age) {
    this.name = name,
    this.age = age,
    this.human = true,
    this.canDrive = () => {
        // driving requirements are age >= 16 years
        console.log(this.age >= 16 ? true : false);
    }
}

let person1 = new Person("DB Cooper", 24);
let person2 = new Person("Fred", 15);

printProperties(person1);
printProperties(person2);

class PersonClass {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
    canDrive() {
        // driving requirements are age >= 16 years
        console.log(this.age >= 16 ? true : false);
    }
}

const person3 = new PersonClass("Sam", 30);
printProperties(person3);

person1.canDrive();
person2.canDrive();
person3.canDrive();
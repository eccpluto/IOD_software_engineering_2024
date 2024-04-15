/**
 * The following code uses the Date object to print the current time and the number of hours
 * that have passes today so far. Extend the code to do the following
 */

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString());

console.log(today.getHours() + ' hours have passed today');

// a) print the total number of minutes that have passed so far today
// use elapsed hours in minutes, added to remaining minutes
console.log(today.getHours() * 60 + today.getMinutes() + ' minutes have passed today');

// b) print the total number of seconds that have passed so far today
// similar logic as above. Note that for accuray we want to use the getSeconds() method, not getMinutes()*60
console.log(today.getHours() * 60 * 60 + today.getSeconds() + ' seconds have passed today');

// c) calculate and print your age:
let birthDay = 20;
let birthMonth = 7;
let birthYear = 1994;

// note this is not accurate, but is more proof-of-concept
let ageYear = today.getFullYear() - birthYear - 1;
let ageMonth = Math.abs((today.getMonth() - birthMonth) % 12);
let ageDay = Math.abs(today.getDate() - birthDay);

console.log(`I am ${ageYear} years, ${ageMonth} months, and ${ageDay} days old`);

// d) function that calcualtes the amount of days between two given dates:
/**
 * 
 * @param {Date} date1 first date object         
 * @param {Date} date2 second date object
 */
function daysInBetween(date1, date2) {
    // get the time in milliseconds since epoch, allowing us to work out absolute difference
    const dateInitial = date1.getTime();
    const dateFinal = date2.getTime();

    const difference = new Date(dateFinal - dateInitial);
    return (difference / 1000 / 60 / 60 / 24);
};

// example test code
let first = new Date(Date.now());
let second = new Date(Date.now() + 5*24*60*60*1000); // now plus 5 days

console.log(daysInBetween(first, second));
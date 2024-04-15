/**
 * Given the below salaries object, perform the following tasks
 */

const salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
};

// a) create a function that returns the sum of the salaries
/**
 * 
 * @param {Object} salaries 
 * @returns sum of the salaries.
 */
function sumSalaries(salaries) {
    let total = 0;
    for (const [key, value] of Object.entries(salaries)) {
        total += value;
    }
    return total;
}

console.log(sumSalaries(salaries));

// b)
/**
 * 
 * @param {Object} salaries 
 * @returns name of the top earner.
 */
function topEarner(salaries) {
    // store some valid entry in the provided data to compare against
    let topEarner = Object.entries(salaries)[0];
    for (const obj of Object.entries(salaries)) {
        if (topEarner[1] < obj[1]) {
            // store the [key, value] if the value of the current pair is greater.
            topEarner = obj;
        }
    }
    // return the first element of the [key, value] pair, which is the name of the top earner 
    return topEarner[0];
}

console.log(topEarner(salaries));
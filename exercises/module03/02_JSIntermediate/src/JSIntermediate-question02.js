/**
 * Create a function truncate(str, max) that truncates a given string of text if
 * its total length is greater than the max length. It should return either the truncated text,
 * with an ellipsis (…) added to the end if it was too long, or the original text otherwise.
 * 
 * b) Write another variant of the truncate function that uses a conditional operator.
 * 
 * console.log(truncate('This text will be truncated if it is too long', 25))
 * // This text will be truncat...
 */

/**
 * 
 * @param {string} str 
 * @param {number} max 
 * @returns A truncated version of the given string, limitted to the max length provided.
 */
function truncate(str, max) {
    // console.log((String(str).length) <= max);
    let strLength = String(str).length;
    if (strLength <= max) { return str };
    
    // otherwise proceed to truncate by returning a substring
    // not although zero-indexed, the character at the terminating index is not included - so we dont need "max - 1"
    let truncatedStr = String(str).substring(0, max);

    if (strLength > max) {
        return truncatedStr + '...';
    } else {
        return truncatedStr;
    }
}

console.log(truncate('This text will be truncated if it is too long', 25));

/**
 * 
 * @param {string} str 
 * @param {number} max 
 * @returns A truncated version of the given string, limitted to the max length provided. Internally uses conditional operator.
 */
function truncateVariant(str, max) {
    // console.log((String(str).length) <= max);
    let strLength = String(str).length;
    if (strLength <= max) { return str };
    
    // otherwise proceed to truncate by returning a substring
    // not although zero-indexed, the character at the terminating index is not included - so we dont need "max - 1"
    let truncatedStr = String(str).substring(0, max);

    // conditional operator variation
    return (strLength > max) ? truncatedStr + "..." : truncatedStr;
}

console.log(truncateVariant('This text will be truncated by the conditional operator variant function, if it is too long', 80));
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

function truncate(str, max) {
    // console.log((String(str).length) <= max);
    // let String(str).length = strLength;
    if (String(str).length <= max) { return str };
    
    // otherwise proceed to truncate by returning a substring
    // not although zero-indexed, the character at the terminating index is not included - so we dont need "max - 1"
    let truncatedStr = String(str).substring(0, max);
    console.log(truncatedStr);

    return (String(str).length > max) ? truncatedStr + "..." : truncatedStr;
}

console.log(truncate("", 0));
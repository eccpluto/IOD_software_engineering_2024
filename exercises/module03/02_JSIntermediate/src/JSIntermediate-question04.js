/**
 * Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into
 * camel-cased - 'marginLeft'.
 * 
 * The function should remove all dashes, and uppercase the first letter of each word after the dash.
 */

/**
 * 
 * @param {string} cssProp is a kebab case string to be converted.
 * @description Returns a string that is the camel case version of the input kebab case string.
 */
function camelCase(cssProp) {
    // locate the dash character patterns
    const regex = /(-)(\w)/g; // capture dash and the character to capitalise using RegEx capturing groups
    // const result = String(cssProp).replace(regex, '$2'.toUpperCase());
    const result = String(cssProp).replace(regex, (match) => {
        // remove the dash and return the character string using array-like syntax
        return match[1].toUpperCase();
    })

    return result;
}
console.log(`margin-left becomes: ${camelCase('margin-left')}`);
console.log(`background-image becoms: ${camelCase('background-image')}`);
console.log(`display becomes: ${camelCase('display')}`);
console.log(`flex-container becomes: ${camelCase('flex-container')}`);

function camelCaseVariantA(cssProp) {
    

    return result;
}
/**
 * Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into
 * camel-cased - 'marginLeft'.
 * 
 * The function should remove all dashes, and uppercase the first letter of each word after the dash.
 */

/**
 * 
 * @param {string} cssProp is a kebab case string to be converted.
 * @returns a string that is the camel case version of the input kebab case string.
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

// Test above using these!
// console.log(`margin-left becomes: ${camelCase('margin-left')}`);
// console.log(`background-image becoms: ${camelCase('background-image')}`);
// console.log(`display becomes: ${camelCase('display')}`);
// console.log(`flex-container becomes: ${camelCase('flex-container')}`);

/**
 * @description this one uses a for loop.
 * @param {string} cssProp is a kebab case string to be converted.
 * @returns a string that is the camel case version of the input kebab case string.
 */
function camelCaseVariantA(cssProp) {
    let components = String(cssProp).split('-');
    for (let i = 1; i < components.length; i++) {
        components[i] = components[i][0].toUpperCase() + components[i].substring(1);
    }

    return components.join('');
}

// Test above using these!
// console.log(camelCaseVariantA('margin-left'));
// console.log(camelCaseVariantA('background-image'));
// console.log(camelCaseVariantA('display'));


/**
 * @desciption this one uses a conditional operator and a new for loop.
 * @param {string} cssProp is a kebab case string to be converted.
 * @returns a string that is the camel case version of the input kebab case string.
 */
function camelCaseVariantB(cssProp) {
    let result = '';
    for(let i = 0; i < String(cssProp).length; i++){

        let hyphenIndex = 0;
        
        (cssProp[i] == '-') ? hyphenIndex = i : result += cssProp[i];

        if(hyphenIndex != 0) {
            result += cssProp[i+1].toUpperCase();
            i++;
        }
    }
    return result;
}

// Test above using these!
// console.log(camelCaseVariantB('margin-left'));
// console.log(camelCaseVariantB('background-image'));
// console.log(camelCaseVariantB('display'));
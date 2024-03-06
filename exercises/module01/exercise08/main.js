/**
 * Simulates rolling a dice, given a faces value, which is the
 * number of sides to use, and returns a number.
 * @param {number} faces 
 * @returns {number}
 */

let g_faces = 6; // D6 as default dice type / number of faces

function getDiceRoll(faces) {

    // get a unmber between 1 and the number of faces
    return Math.floor(Math.random() * g_faces) + 1;
}

/**
 * Updates the dice type which is determined by the number of faces on a die
 * For example, faces == 6 is a D6, faces == 10 is a D10 
 * @param {number} faces 
 */
function updateDiceType() {
    let faces = Number(document.getElementById('textInputDiceType').value);
    // only update dice type if the user submits a number, and is different to the current value
    if( !isNaN(faces) && faces != g_faces) {
        g_faces = faces;
    }
}

function printDiceRoll() {
    let test = getDiceRoll();
    document.getElementById("diceNumber").innerHTML = test;
}
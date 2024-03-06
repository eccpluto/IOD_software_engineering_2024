/**
 * Simulates rolling a dice, given a faces value, which is the
 * number of sides to use, and returns a number.
 * @param {number} faces 
 * @returns {number}
 */


function getDiceRoll() {

    // get a unmber between 1 and the number of faces
    return Math.floor(Math.random() * g_faces) + 1;
}

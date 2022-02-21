/**
 * @param {number} [length=6] Length of the random number
 * @returns {number} Random number with a length default is 6
 */
function generateRandomNumber(length = 6) {
    return Math.floor(100000 + Math.random() * Number("9".padEnd(length, "0")));
}

/**
 * @param {number} num number to be rounded
 * @param {number} [multiple=4] to be rounded to the nearest multiple, default 4
 * @returns {number} rounded number
 */
function roundMultiple(num, multiple = 4) {
    return Math.round(num / multiple) * multiple;
}

module.exports = {
    generateRandomNumber,
    roundMultiple
}

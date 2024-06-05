/**
 *
 * @param number1: 5
 * @param number2: 9
 * @param number3: 7
 * @returns {Number}
 */
module.exports.getMin = function getMin(number1, number2, number3) {
    return Math.min(number1, number2, number3);
};

/**
 *
 * @param x: 1
 * @param y: 3
 * @param z: 11
 * @returns {String}
 */
module.exports.evenOrOdd = function evenOrOdd(x, y, z) {
    const allEven = x % 2 === 0 && y % 2 === 0 && z % 2 === 0;
    const allOdd = x % 2 !== 0 && y % 2 !== 0 && z % 2 !== 0;

    if (allEven) {
        return "even";
    } else if (allOdd) {
        return "odd";
    } else {
        return "even/odd";
    }
};

/**
 *
 * @param x: 5
 * @param y: 10
 * @param z: 8
 * @returns {String}
 */
module.exports.inOrOutRange = function inOrOutRange(x, y, z) {
    if (z >= x && z <= y) {
        return "In range";
    } else {
        return "Out of range";
    }
};

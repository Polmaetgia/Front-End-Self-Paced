/**
 *
 * @param x: 0
 * @param y: 20
 * @param step: 5
 * @returns {String}
 */
module.exports.createString = function createString(x, y, step) {
    let result = [];
    for (let i = x; i <= y; i += step) {
        result.push(i);
    }
    return result.join(' ');
};

/**
 *
 * @param x: 0
 * @param y: 3
 * @returns {Number}
 */
module.exports.rangeSum1 = function rangeSum1(x, y) {
    let sum = 0;
    for (let i = y; i >= x; i--) {
        for (let j = x; j <= i; j++) {
            sum += j;
        }
    }
    return sum;
};

/**
 *
 * @param x: 5
 * @param y: 10
 * @returns {Number}
 */
module.exports.rangeSum2 = function rangeSum2(x, y) {
    let sum = 0;
    for (let i = x; i <= y; i++) {
        sum += i;
    }
    return sum;
};

/**
 *
 * @param x: 1
 * @returns {String}
 */
module.exports.seriesSum = function seriesSum(x) {
    let sum = 0;
    for (let i = 1; i <= x; i++) {
        sum += 1 / (i * i);
    }
    return sum.toFixed(2);
};

/**
 *
 * @param x: 252525
 * @returns {Number}
 */
module.exports.countDigits = function countDigits(x) {
    return x.toString().length;
};

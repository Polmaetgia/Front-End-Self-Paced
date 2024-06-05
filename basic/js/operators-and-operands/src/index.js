/**
 *
 * @param number1: 1
 * @param number2: 2
 * @returns {Number}
 */
module.exports.getSum = function getSum(number1, number2) {
    return number1 + number2;
};

/**
 *
 * @param name: Maks
 * @param surname: Skorin
 * @param age: 19
 * @returns {String}
 */
module.exports.greeting = function greeting(name, surname, age) {
    return `Hello, my name is ${name} ${surname} and I am ${age} years old.`;
};

/**
 *
 * @param x: 1
 * @returns {Boolean}
 */
module.exports.isSquare = function isSquare(x) {
    return Number.isInteger(Math.sqrt(x));
};



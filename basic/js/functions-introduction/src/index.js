/**
 *
 * @param str: hello
 * @param symbolsCount: 1
 * @returns {String}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
    if (symbolsCount >= str.length) {
        return str;
    }
    const endPart = str.slice(-symbolsCount);
    return endPart + str + endPart;
};

/**
 *
 * @param z: 100
 * @param x: 22
 * @param y: 122
 * @returns {Number}
 */
module.exports.nearest = function nearest(z, x, y) {
    const distanceToX = Math.abs(z - x);
    const distanceToY = Math.abs(z - y);
    return distanceToX <= distanceToY ? x : y;
};

/**
 *
 * @param arr: [1,2,3,2,3,1,1]
 * @returns {Array}
 */
module.exports.removeDuplicate = function removeDuplicate(arr) {
    let uniqueElements = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueElements.includes(arr[i])) {
            uniqueElements.push(arr[i]);
        }
    }
    return uniqueElements;
};

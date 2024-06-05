// Function to add a number to the array based on its value
function addNumber(arr, number) {
    if (number > 0) {
        arr.unshift(number);
    } else if (number < 0) {
        arr.push(number);
    }
    return arr;
}

// Function to compare two arrays for equality
function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// Function to get the number of even elements in an array
function getNumberOfEven(arr) {
    return arr.filter(num => typeof num === 'number' && num % 2 === 0).length;
}

// Function to get a subarray up to and including a specific data element
function getSubarray(arr, data) {
    const index = arr.indexOf(data);
    if (index === -1) return [];
    return arr.slice(0, index + 1);
}

// Function to get an array of duplicate values from the input array
function getDuplicateValues(arr) {
    const seen = new Set();
    const duplicates = new Set();
    for (const item of arr) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }
    return Array.from(duplicates);
}

// Function to get the maximum numbers from each nested array
function getMaxNumbers(arr) {
    return arr.map(subArr => Math.max(...subArr));
}

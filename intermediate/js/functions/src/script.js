// Function to calculate the sum of the series up to the nth term
function sumSequence(n) {
    if (n === 0) return '0.00';
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / Math.pow(2, i);
    }
    return sum.toFixed(2);
}

// Function to merge multiple arrays into one
function mergeArrays(...arrays) {
    return arrays.flat();
}

// Function to check if a string can be rearranged into a palindrome
function isPalindrome(str) {
    const charCount = {};
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    let oddCount = 0;
    for (const count of Object.values(charCount)) {
        if (count % 2 !== 0) oddCount++;
    }
    return oddCount <= 1;
}

// Function to count the occurrences of each letter in a string
function countLetters(str) {
    const result = {};
    for (const char of str.replace(/\s+/g, '')) {
        result[char] = (result[char] || 0) + 1;
    }
    return result;
}

// Function to divide an array into smaller arrays of a specified size
function divideArrays(arr, size) {
    if (size <= 0) return [];
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

// Function to encrypt a string using Caesar's cipher
function encrypt(str, n) {
    if (n <= 0) return str;
    let result = '';
    for (const char of str) {
        const charCode = char.charCodeAt(0);
        const newCharCode = ((charCode - 65 - n + 26) % 26) + 65;
        result += String.fromCharCode(newCharCode);
    }
    return result;
}

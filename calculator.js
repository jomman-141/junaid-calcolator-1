/**
 * Simple Calculator
 * Provides basic arithmetic operations
 */

/**
 * Add two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtract second number from first number
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiply two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divide first number by second number
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Quotient of a and b
 * @throws {Error} If divisor is zero
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

/**
 * Calculate the power of a number
 * @param {number} base - Base number
 * @param {number} exponent - Exponent
 * @returns {number} Base raised to the power of exponent
 */
function power(base, exponent) {
    return Math.pow(base, exponent);
}

/**
 * Calculate the square root of a number
 * @param {number} a - Number to calculate square root of
 * @returns {number} Square root of a
 * @throws {Error} If number is negative
 */
function sqrt(a) {
    if (a < 0) {
        throw new Error("Cannot calculate square root of negative number");
    }
    return Math.sqrt(a);
}

/**
 * Calculate the percentage
 * @param {number} value - Value
 * @param {number} percentage - Percentage
 * @returns {number} Percentage of value
 */
function percentage(value, percentage) {
    return (value * percentage) / 100;
}

// Export functions for use in other modules
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power,
    sqrt,
    percentage
};

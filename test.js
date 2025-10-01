/**
 * Simple test file for calculator functions
 */

const calculator = require('./calculator');

console.log("Testing Calculator Functions:\n");

// Test addition
console.log("Addition Tests:");
console.log("5 + 3 =", calculator.add(5, 3), "(Expected: 8)");
console.log("10 + (-5) =", calculator.add(10, -5), "(Expected: 5)");
console.log();

// Test subtraction
console.log("Subtraction Tests:");
console.log("10 - 4 =", calculator.subtract(10, 4), "(Expected: 6)");
console.log("5 - 8 =", calculator.subtract(5, 8), "(Expected: -3)");
console.log();

// Test multiplication
console.log("Multiplication Tests:");
console.log("6 * 7 =", calculator.multiply(6, 7), "(Expected: 42)");
console.log("5 * 0 =", calculator.multiply(5, 0), "(Expected: 0)");
console.log();

// Test division
console.log("Division Tests:");
console.log("20 / 4 =", calculator.divide(20, 4), "(Expected: 5)");
console.log("7 / 2 =", calculator.divide(7, 2), "(Expected: 3.5)");
try {
    calculator.divide(10, 0);
    console.log("ERROR: Should have thrown an error for division by zero");
} catch (e) {
    console.log("10 / 0 = Error:", e.message, "(Expected: Error)");
}
console.log();

// Test power
console.log("Power Tests:");
console.log("2 ^ 3 =", calculator.power(2, 3), "(Expected: 8)");
console.log("5 ^ 2 =", calculator.power(5, 2), "(Expected: 25)");
console.log();

// Test square root
console.log("Square Root Tests:");
console.log("sqrt(16) =", calculator.sqrt(16), "(Expected: 4)");
console.log("sqrt(25) =", calculator.sqrt(25), "(Expected: 5)");
try {
    calculator.sqrt(-4);
    console.log("ERROR: Should have thrown an error for negative square root");
} catch (e) {
    console.log("sqrt(-4) = Error:", e.message, "(Expected: Error)");
}
console.log();

// Test percentage
console.log("Percentage Tests:");
console.log("20% of 100 =", calculator.percentage(100, 20), "(Expected: 20)");
console.log("50% of 80 =", calculator.percentage(80, 50), "(Expected: 40)");
console.log();

console.log("All tests completed!");

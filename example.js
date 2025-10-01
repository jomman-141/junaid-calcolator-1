/**
 * Example usage of the calculator
 */

const calculator = require('./calculator');

console.log("Simple Calculator Demo\n");
console.log("======================\n");

// Basic arithmetic operations
console.log("Basic Arithmetic:");
console.log("5 + 3 =", calculator.add(5, 3));
console.log("10 - 4 =", calculator.subtract(10, 4));
console.log("6 * 7 =", calculator.multiply(6, 7));
console.log("20 / 4 =", calculator.divide(20, 4));
console.log();

// Advanced operations
console.log("Advanced Operations:");
console.log("2 to the power of 3 =", calculator.power(2, 3));
console.log("Square root of 16 =", calculator.sqrt(16));
console.log("20% of 100 =", calculator.percentage(100, 20));
console.log();

// Chaining calculations
console.log("Chained Calculations:");
let result = calculator.add(5, 3);  // 8
result = calculator.multiply(result, 2);  // 16
result = calculator.divide(result, 4);  // 4
console.log("((5 + 3) * 2) / 4 =", result);

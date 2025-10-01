# junaid-calcolator-1

A simple calculator with all basic calculator functions.

## Features

This calculator provides the following operations:
- **Addition** - Add two numbers
- **Subtraction** - Subtract one number from another
- **Multiplication** - Multiply two numbers
- **Division** - Divide one number by another (with zero-division protection)
- **Power** - Raise a number to a power
- **Square Root** - Calculate the square root of a number
- **Percentage** - Calculate percentage of a value

## Usage

### Using in Node.js

```javascript
const calculator = require('./calculator');

// Addition
console.log(calculator.add(5, 3)); // Output: 8

// Subtraction
console.log(calculator.subtract(10, 4)); // Output: 6

// Multiplication
console.log(calculator.multiply(6, 7)); // Output: 42

// Division
console.log(calculator.divide(20, 4)); // Output: 5

// Power
console.log(calculator.power(2, 3)); // Output: 8

// Square Root
console.log(calculator.sqrt(16)); // Output: 4

// Percentage
console.log(calculator.percentage(100, 20)); // Output: 20
```

## Testing

Run the test file to verify all functions work correctly:

```bash
node test.js
```

## Functions

### add(a, b)
Returns the sum of two numbers.

### subtract(a, b)
Returns the difference between two numbers.

### multiply(a, b)
Returns the product of two numbers.

### divide(a, b)
Returns the quotient of two numbers. Throws an error if dividing by zero.

### power(base, exponent)
Returns the base raised to the power of the exponent.

### sqrt(a)
Returns the square root of a number. Throws an error for negative numbers.

### percentage(value, percentage)
Returns the percentage of a value.

// Problem Statement:

// find the factorial of the given number

// Solution:

function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));
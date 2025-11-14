// Problem Statement:

// find the sum of n numbers

// Solution:

function SumOfNumbers(n) {
    if (n == 0) return 0;

    return n + SumOfNumbers(n - 1);
}

console.log(SumOfNumbers(5));
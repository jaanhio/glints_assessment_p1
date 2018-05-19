/*
  Part1, Q1. Factorials
*/

/*
  Solution 1: Recursive solution. 
  Space-complexity: O(n)
  Time-complexity: O(n)
*/
const factorialRecursive = n => {
  // check that input is a positive integer. if not, throw error
  if (isNaN(n) || n <= 0) {
    throw 'Input must be positive integer';
  }
  // base case: factorial of 1 is 1, hence if n <= 1, return 1
  if (n <= 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(process.argv[2]));


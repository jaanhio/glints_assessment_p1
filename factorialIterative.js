/*
  Part1, Q1. Factorials
*/

/*
  Solution 2: Iterative solution
  Space-complexity: 0(1)
  Time-complexity: 0(n)
*/
const factorialIterative = n => {
  // check that input is a positive integer. if not, throw error
  if (isNaN(n) || n < 0) {
    throw 'Input must be positive integer';
  }
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total = total * i;
  }

  return total;
}

console.log(factorialIterative(process.argv[2]));
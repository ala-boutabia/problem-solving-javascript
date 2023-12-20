/**
 * @description
 * You get an array of numbers, return the sum of all of the positives ones.
 * Notes: If there is nothing to return, the sum is default to 0
 */

function sum_of_positives(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

function sum_of_positives2(arr) {
  return arr.filter((x) => x > 0).reduce((prev, current) => prev + current, 0);
}

const sum1 = sum_of_positives([2, 2, 15, 1, -5]);
console.log(sum1);

console.log(sum_of_positives2([1, 2, -5, 2, 10, -5]));

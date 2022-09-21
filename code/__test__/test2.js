/**
 * Select index of max value in array
 * Select index of min value in array
 * Compare if index max > index min
 *
 *
 * Require return value max profit
 */

const array1 = [7, 1, 5, 3, 6, 4];
const array2 = [7, 6, 4, 3, 1];

function maxProfit(inputArray) {
  const option = inputArray
    .reduce(
      (previous, current) =>
        previous.concat(previous.map((value) => value.concat(current))),
      [[]]
    )
    .filter((element) => element.length === 2);

  let profit = 0;

  for (let i of option) {
    let first = inputArray.indexOf(i[0]);
    let second = inputArray.indexOf(i[1]);

    if (first < second) {
      if (profit < i[1] - i[0]) {
        profit = i[1] - i[0];
      }
    }
  }

  return profit;
}

console.log(maxProfit(array1));
console.log(maxProfit(array2));

/**

Problema 2
Maximice A[P] * A[Q] * A[R] para cualquier triplete (P, Q, R).
Se proporciona una matriz A no vacía que consta de N números enteros. El producto del triplete (P, Q, R) equivale a A [P] * A [Q] * A [R] (0 ≤ P <Q <R <N).


Test Cases


const arr = [-1, 1, -2, 5] = 10
const arr = [-1, 1, -2, 5];
*/
const test1 = [-3, 1, 2, -2, 5, 6];
const test2 = [-1, 1, -2, 5];
const test3 = [
  20, 5, 1, 6, -85, 15, 7, 9, 10, 22, 35, 60, 1, 0, -7, 9, 8, 6, 5,
];
const test4 = [1, 1, 3, -8, -100, 21, -9];

function maxTri(arr) {
  const { length } = arr;
  let max = 0;
  for (let i = 0; i < length - 2; i++) {
    for (let j = i + 1; j < length; j++) {
      let mult = arr[i] * arr[j] * arr[j + 1];
      if (mult > max) {
        max = mult;
      }
    }
  }

  return max;
}

console.log(maxTri(test1));
console.log(maxTri(test2));
console.log(maxTri(test3));
console.log(maxTri(test4));

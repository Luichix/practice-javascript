/**

Problema 1

Se proporciona una matriz A no vacía que consta de N números enteros. Los elementos consecutivos de la matriz A representan automóviles consecutivos en una carretera.

La matriz A contiene solo 0 y / o 1:
0 representa un automóvil que viaja hacia el este,
1 representa un automóvil que viaja hacia el oeste.

Test Cases
[0, 1, 0, 1, 1] = 5
[0, 1, 1, 1, 1, 0, 1, 1 , 0] = 8
[0, 0, 1] = 2
[1, 1] = 0

*/

const test1 = [0, 1, 0, 1, 1];
const test2 = [0, 1, 1, 1, 1, 0, 1, 1, 0];
const test3 = [0, 0, 1];
const test4 = [1, 1];

function countCar(arr) {
  const { length } = arr;
  let contRigth = 0;
  let contLeft = 0;

  for (let i = 0; i < length; i++) {
    for (let j = i; j < length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        contLeft++;
        break;
      }
    }
  }
  for (let i = length; i > 0; i--) {
    for (let k = i - 1; k > 0; k--) {
      if (arr[k] < arr[k - 1]) {
        contRigth++;
      }
      break;
    }
  }

  let sum = contLeft + contRigth;

  return sum;
}

console.log(countCar(test1));
console.log(countCar(test2));
console.log(countCar(test3));
console.log(countCar(test4));

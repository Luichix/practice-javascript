const test1 = [0, 1, 0, 1, 1];
const test2 = [0, 1, 1, 1, 1, 0, 1, 1, 0];
const test3 = [0, 0, 1];
const test4 = [1, 1];

function orderDescendent(array) {
  let { length } = array;
  let cont = 0;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] < array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        cont++;
      }
    }
  }
  return cont;
}

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

// console.log(orderDescendent(test1));
// console.log(orderDescendent(test2));
// console.log(orderDescendent(test3));
// console.log(orderDescendent(test4));

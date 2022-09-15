function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
function bubleSort(array) {
  const { length } = array;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j <= length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    swap(array, i, minIndex);
  }
  return array;
}

function insertSort(array) {
  const { length } = array;

  for (let i = 0; i < length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        swap(array, j, j - 1);
      }
    }
  }
  return array;
}

function mergeSort(array) {
  const { length } = array;
  if (length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);

  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle, length);

  const leftArrayMerged = mergeSort(leftArray);
  const rightArrayMerged = mergeSort(rightArray);

  return merge(leftArrayMerged, rightArrayMerged);
}

function merge(leftArray, rightArray) {
  let result = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      result.push(leftArray.shift());
    } else {
      result.push(rightArray.shift());
    }
  }

  result = result.concat(leftArray);
  return result.concat(rightArray);
}

let array = [7, 1, 3, 2, 4, 5, 6];

// let buble = bubleSort(array);
// console.log('bubleSort', buble);

// let selection = selectionSort2(array);
// console.log('selectionSort', selection);

// let insert = insertSort(array);
// console.log('insertSort', insert);

// let merged = mergeSort(array);
// console.log('mergetSort', merged);

function bubleSort2(array) {
  const { length } = array;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

function selectionSort2(array) {
  const { length } = array;

  for (let i = 0; i < length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    swap(array, i, minIndex);
  }
  return array;
}

function insertSort2(array) {
  const { length } = array;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        swap(array, j, j - 1);
      }
    }
  }
  return array;
}
function mergeSort2(array) {
  const { length } = array;

  if (length <= 1) {
    return array;
  }

  const middle = Math.floor(length / 2);

  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle, length);

  const leftArrayMerged = mergeSort2(leftArray);
  const rightArrayMerged = mergeSort2(rightArray);

  return merge(leftArrayMerged, rightArrayMerged);
}

function merge2(leftArray, rightArray) {
  let result = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      result.push(leftArray.shift());
    } else {
      result.push(rightArray.shift());
    }
  }
  result = result.concat(leftArray);
  return result.concat(rightArray);
}

function stepPerms(n) {
  let sum = Array(n + 1).fill(0);
  if (n >= 1) sum[1] = 1;
  if (n >= 2) sum[2] = 2;
  if (n >= 3) sum[3] = 4;
  for (let i = 1; i <= n - 3; i++) {
    sum[i + 3] = sum[i] + sum[i + 1] + sum[i + 2];
    console.log(sum[i + 3], sum[i], sum[i + 1], sum[i + 2]);
  }
  return sum[n];
}

function stepPerms2(n) {
  if (n <= 1) return 1;
  if (n <= 2) return 2;
  if (n <= 3) return 4;

  const first = stepPerms(n - 1);
  const second = stepPerms(n - 2);
  const third = stepPerms(n - 3);

  return sumStep(first, second, third);
}

function sumStep(first, second, third) {
  return first + second + third;
}

// console.log('stepPerms', stepPerms2(6));

function minimumSwaps(arr) {
  let swap = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != i + 1) {
      let index = i;
      while (arr[index] != i + 1) {
        index++;
      }
      console.log(arr[index], arr[i], i + 1);

      arr[index] = arr[i];

      arr[i] = i + 1;

      swap++;
      console.log(arr);
    }
  }

  return swap;
}

console.log(minimumSwaps(array));

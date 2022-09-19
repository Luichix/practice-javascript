export function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
export function bubleSort(array) {
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

export function selectionSort(array) {
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

export function insertSort(array) {
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

export function mergeSort(array) {
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

export function merge(leftArray, rightArray) {
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

export function stepPerms(n) {
  let sum = Array(n + 1).fill(0);
  if (n >= 1) sum[1] = 1;
  if (n >= 2) sum[2] = 2;
  if (n >= 3) sum[3] = 4;
  for (let i = 1; i <= n - 3; i++) {
    sum[i + 3] = sum[i] + sum[i + 1] + sum[i + 2];
  }
  return sum[n];
}

export function stepPerms2(n) {
  if (n <= 1) return 1;
  if (n <= 2) return 2;
  if (n <= 3) return 4;

  const first = stepPerms(n - 1);
  const second = stepPerms(n - 2);
  const third = stepPerms(n - 3);

  return sumStep(first, second, third);
}

export function sumStep(first, second, third) {
  return first + second + third;
}

export function minimumSwaps(arr) {
  let swap = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != i + 1) {
      let index = i;
      while (arr[index] != i + 1) {
        index++;
      }

      arr[index] = arr[i];

      arr[i] = i + 1;

      swap++;
    }
  }

  return swap;
}

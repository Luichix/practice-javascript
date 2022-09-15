function chunkArrayInGroups(arr, size) {
  let indice = 0
  let matriz =[]
  let matrix =[]
  for (let element in arr){
    if(indice < size){
      matriz.push(arr[element])
      indice += 1
    } else if(indice == size){
      matrix.push(matriz);
      indice = 1;
      matriz = [arr[element]]
    }
  }
    matrix.push(matriz);

  return matrix;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
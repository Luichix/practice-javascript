function diffArray(arr1, arr2) {
  const newArr = [];
  let arr=[]
  let cont = 0
  newArr.push(...arr1.concat(arr2));

  for(let i in newArr){
    for(let e in newArr){
      if(newArr[i] == newArr[e]){
        cont+=1 
        if (cont ==2){      
          cont=0
          break
        } 
      }
    }
      if ( cont == 1){
        arr.push(newArr[i])
        cont=0;
      }

  }

  return arr;

}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
function dropElements(arr, func) {
  loop1:
  for(let i =0; i < arr.length; i){
    if(func(arr[i])){
      break loop1
    } else {
      arr.shift()
    }
  }
  
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
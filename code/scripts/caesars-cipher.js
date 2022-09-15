function rot13(str) {
  let arr = str.split("");
  let newArr = [];
  let abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  for (let chr in arr){
    let val = abc.indexOf(arr[chr]);
    if (val == -1 ){
      newArr.push(arr[chr]);
    } else if(val<=12){
      newArr.push(abc[val+13]);
    } else {
      newArr.push(abc[val-13])
    };  
  };

  newArr = newArr.join("")
  return newArr
}

rot13("SERR PBQR PNZC");
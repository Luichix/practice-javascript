function sumPrimes(num) {
  let arrNum =[]
  for (let i = num; i > 0; i--){
    arrNum.unshift(i);
  }

  const prim = function (k){
    let cont = 0;
    for (let j = 1; j <= k; j++ ){
        if(k % j == 0){
          cont++
        }
    }
    if (cont > 2){
      return false
    }
    return true
  }

  arrNum =arrNum.filter(e => prim(e)).reduce((sum,l) => sum + l,-1);
  
  console.log(arrNum);
  return arrNum;
}

sumPrimes(10);
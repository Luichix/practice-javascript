function smallestCommons(arr) {
  let newArr =[];
  let arrR =[]
  const arrSort = arr.sort((a,b)=> a-b);
  
  for (let i = Math.min(...arrSort); i <= arrSort[(arrSort.length - 1)]; i++){
    arrR.push(i);
  };
  
console.log(arrR)
  
  for(let n = 0; n < arrR.length; n){
    
    let div = minNum(Math.min(...arrR));

    function minNum (num){
      if(num == 1){
        return num
      }
      else {
        for (let min = 2; min <= num; min++){
          if(num % min == 0){
            return min
          }
        };
      }
    }
    
    arrR = arrR.map(e => (e/div) == parseInt(e/div)? (e/div) : e).filter(e => e != 1);
    newArr.push(div);

    
  };
  console.log(newArr)
    newArr = newArr.reduce((mult, e) => mult*e,1)
  console.log(newArr);
  return newArr;
}

smallestCommons([10,1]);
smallestCommons([23, 18])
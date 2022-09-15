function convertToRoman(num) {
  let arr = [];
  let newNum = 0;
  for(let i = 1000; i >= 1; i/=10){
    newNum = parseInt(num/i);
    num = Math.round((num/i-newNum)*i);
    arr.push(newNum);
  }
  let mX = {
    1000 : 'M',
    500: 'D',
    100: 'C',
    50: 'L',
    10: 'X',
    5: 'V',
    1: 'I'
  }
  let numRom = [];
  LoopRom:
  for (let n in arr){
    let e = n==0? 1000:n==1?100:n==2?10:1;
    switch (arr[n]){
    case 0:
      continue LoopRom;
    case 1:
      numRom.push(mX[e]);
      break;
    case 2:
      numRom.push(mX[e],mX[e]);
      break;
    case 3:
      numRom.push(mX[e],mX[e],mX[e]);
      break;
    case 4:
      numRom.push(mX[e],mX[e*5]);
      break;
    case 5:
      numRom.push(mX[e*5]);
      break;
    case 6:
      numRom.push(mX[e*5],mX[e]);
      break;
    case 7:
      numRom.push(mX[e*5],mX[e],mX[e]);
      break;
    case 8:
      numRom.push(mX[e*5],mX[e],mX[e],mX[e]);
      break;
    case 9:
      numRom.push(mX[e],mX[e*10]);
      break;
    }
  }
  numRom = numRom.join("")
  console.log(numRom)
 return numRom;
}

convertToRoman(36);
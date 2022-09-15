function sumAll(arr) {
  let serie = []
  let sorted = arr.sort((a,b)=>a-b)
  let rango = sorted.reduce((rest, digit) => digit - rest ,1)
  for (let i = 0; i < rango; i++){
      serie.push(sorted[0]+i);
  }  
  return serie.reduce((sum,digit)=> sum+digit,0);
}

sumAll([1, 4]);
sumAll([15, 5]);
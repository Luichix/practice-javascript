function uniteUnique(arr) {
  let sortArr = []
  let arrSort = [...arguments].join().split(",").map(i => parseInt(i));
  sortArr=arrSort.filter((e) => sortArr.indexOf(e) ==-1? sortArr.push(e):false )
  console.log(sortArr)
  return sortArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

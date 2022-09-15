function steamrollArray(arr) {
  
  arr = arr
  .join()
  .split(",")
  .map(e => (!isNaN(e) && e != 0)? parseInt(e): e== {} ? {}:e)
  .filter(e => e);
  console.log(arr)
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);
steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
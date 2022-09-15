function titleCase(str) {
  let chr=""
  let rest=""
  let strRegex= /\S+/g
  let arr= str.match(strRegex)
  let string=""
  for (let e in arr){
    arr[e]=arr[e].toLowerCase();
    chr = arr[e][0].toUpperCase();

    if(arr[e].length > 1){
      rest = arr[e].slice(1,arr[e].length);
      arr[e] = chr + rest;
    } else arr[e] = chr
      
      string += arr[e] 
      if(string.length < str.length){
        string += " "
      }
  }
  console.log(string)
  console.log(arr)
  return string;
}

titleCase("I'm a little tea pot");
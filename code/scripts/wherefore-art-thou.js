function whatIsInAName(collection, source) {
  let arr = [];
  // Only change code below this line
  arr.push(...collection)
  let keys = Object.keys(source)
  
  for (let e of keys){
        arr = arr.filter(i => i.hasOwnProperty(e) && i[e] == source[e])
  }


  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) 
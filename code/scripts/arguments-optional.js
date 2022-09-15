function addTogether() {
  const [one, two] = arguments
  if ( typeof(one) !== "number"){
    return undefined
  }; 
  if (two === undefined){
    return (two) => addTogether(one, two)
  }
  if (typeof (two) !== "number"){
    return undefined
  }
  return one + two
}

addTogether(2,3);
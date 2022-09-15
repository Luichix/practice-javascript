function spinalCase(str) {
  let arrStr =[]
  let splitArr = []
  let arr = [...str]
  for (let i = 0; i < arr.length; i++){
    if (arr[i] != " " && arr[i] != "_" && arr[i] != "-"){
      if (arr[i]==(arr[i].toUpperCase())){
        splitArr.push(...arrStr)
        arrStr=[]
        arrStr.push(arr[i]);
      } else {
        arrStr.push(arr[i]);
        arrStr = arrStr.join("");
        arrStr = arrStr.split(" ")
      }
    } 
    else  {
      splitArr.push(...arrStr)
      arrStr=[]
    } 
    
    
  }
      splitArr.push(...arrStr)
      
  return splitArr.join("-").toLowerCase();
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap")
spinalCase("The_Andy_Griffith_Show")
spinalCase("Teletubbies say Eh-oh")
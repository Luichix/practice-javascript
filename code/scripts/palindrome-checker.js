function palindrome(str) {
  let strRegex1 = /\w+/g
  let strA = str.toLowerCase().match(strRegex1);
  let strB =[];
  strA = strA.join("").match(/[^_]/g).join("");
  for(let i = strA.length; i > 0;i-- ){
    strB.push(strA[i-1])
  }
  strB = strB.join("")
  if(strA == strB){
    return true
  }
  console.log(strA,strB)
  return false;
}

palindrome("eye");
palindrome("_eye") //should return true.
palindrome("0_0 (: /-\ :) 0-0")
palindrome("race car") //should return true.
palindrome("never odd or even") //should return true.
palindrome("My age is 0, 0 si ega ym.") //should return true.
palindrome("1 eye for of 1 eye.")  //should return false.
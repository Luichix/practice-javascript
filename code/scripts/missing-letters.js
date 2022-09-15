function fearNotLetter(str) {
  let chr=""
  let chrRegex =""
  const abc = "abcdefghijklmnopqrstuvwxyz"
  const strRegex =new RegExp (`${str[0]}\\w*${str[str.length-1]}`)
  
  chr=abc.match(strRegex)[0]
  chrRegex = new RegExp (`[^${str}]`)
  
  chr = chr.match(chrRegex)

  console.log(chr);
  if (chr!= null){
    return chr[0];
  }
  return 
}

fearNotLetter("abce");
fearNotLetter("stvwx");
fearNotLetter("abcdefghijklmnopqrstuvwxyz")
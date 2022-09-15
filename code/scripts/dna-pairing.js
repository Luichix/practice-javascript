function pairElement(str) {
  let arrStr = [];
  let basePairs = [["A","T"],["C","G"]];
  
 let pair = function(e){
   let base = ""
   let eReg = new RegExp(e)
   base = basePairs.filter(k => k.indexOf(e) != -1)
   base = base[0].filter(l => l != l.match(eReg))
   
   return base[0]
 };
  
  [...str].map(e => arrStr.push(e.concat(
    pair(e)    
  ).split("")));
 
  

  return arrStr;
}

pairElement("GCG");
pairElement("ATCGA") 
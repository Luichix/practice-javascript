function truthCheck(collection, pre) {
  let arrTru = [];
  arrTru =collection.filter(e => e[pre]?true:false).map(e => true);
  if(collection.length == arrTru.length){
    return true
  }
  return false;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
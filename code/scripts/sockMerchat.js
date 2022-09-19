function sockMerchant(n, ar) {
  // Write your code here
  let arT = [];
  let par = 0;
  for (let i = 0; i < ar.length; i++) {
    let e = ar[i];
    if (!arT.includes(e)) {
      arT.push(e);
    } else {
      arT.splice(arT.indexOf(e), 1);
      par++;
    }
  }
  return par;
}

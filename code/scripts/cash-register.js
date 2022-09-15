function checkCashRegister(price, cash, cid) {
  let report = {};
  let change = cash - price;
  let breakdown = []
  let money = [['ONE HUNDRED', 100],["TWENTY", 20],["TEN", 10],["FIVE", 5],["ONE", 1],["QUARTER", 0.25],["DIME", 0.10],["NICKEL", 0.05],["PENNY", 0.01]];
  let cashBox = cid.reduce((sum,i) => sum +i[1],0).toFixed(2);
  
  cid.reverse();
    
  for(let i = 0; i < money.length;i++){
    let coin = money[i][1];
    let shift = cid[i][1];
    let req = Math.floor(change/coin);
    let ava = Math.floor(shift/coin);
    if(req <= ava){
      breakdown.push([money[i][0],req*coin]);
      change-= req*coin;
    } else {
      breakdown.push([money[i][0],ava*coin]);
      change-= ava*coin;
    };
      change = change.toFixed(2);
      
  };
   
  if(change > 0){
    report = {
      status : "INSUFFICIENT_FUNDS",
      change : []
    };
  } else if(change == 0 && cashBox == (cash-price)){
    report = {
      status : "CLOSED",
      change : breakdown.reverse()
    };
  } else {
    report = {
      status : "OPEN",
      change : breakdown.filter(e => e[1] != 0)
    };
  }
    console.log(report)

  return report;
};
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); 
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
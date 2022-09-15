// let count = 0;

// function cc(card) {
//   // Only change code below this line
//   let cardsCount = [[1,[2,3,4,5,6]], [0,[7,8,9]],[-1,[10,'J','Q','K','A']]]
  

//    for (let cards of cardsCount){
//       for (let c of cards[1]){
//         if (c == card){
//           count += cards[0];
//           if (count > 0 ){
//             return console.log(count +" Bet");
//           } else return console.log(count + " Hold");
//         }
//       }
//     } 
//     return false
//   // Only change code above this line
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');

function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) return true;
    
    return "Not found"
    // Only change code above this line
  }
 console.log(checkObj({pet: "kitten", bed: "sleigh"}, "gift"));
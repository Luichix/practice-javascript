/**

736778906400
51574523448
*/
const string =
  'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm';
const number = 100;

const result = 51574523448;

function repeatedString(s, n) {
  // Write your code here
  let contA = 0;
  let newArray = 0;
  const arrayLetters = [...s];
  const aInside = arrayLetters.filter((e) => e === 'a').length;
  console.log(aInside, s.length, n, contA, newArray);

  if (aInside === s.length) {
    return n;
  } else if (aInside === 0) {
    return 0;
  }

  while (newArray < n) {
    for (let j = 0; j < arrayLetters.length; j++) {
      if (newArray >= n) {
        return contA;
      } else {
        if (arrayLetters[j] === 'a') {
          contA++;
        }
        newArray++;
      }
    }
  }
  return contA;
}

console.log(repeatedString(string, number));

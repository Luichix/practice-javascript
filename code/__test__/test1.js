const test1 = ['flower', 'flow', 'flight']; //= "fl"
const test2 = ['dog', 'racecar', 'car']; //= ""
const test3 = ['1ryzopkddwksa', '1ryzlomskajsja', '1ryzopkddwks1']; //= "1ryz"

function prefixString(array) {
  let pin = array[0].split('');

  let string = pin; //pin

  for (let i = 1; i < array.length; i++) {
    let current = array[i].split('');
    for (let j = 0; j < pin.length; j++) {
      if (!string[j]) {
        if (current[j] === pin[j]) {
          if (!string[j]) {
            string.push(current[j]);
          } else {
            string.splice(j);
          }
        } else {
          string.splice(j);
        }
      }
      if (string[j] !== current[j]) {
        string.splice(j);
      }
    }
  }
  return string.join('');
}

console.log(prefixString(test1));
console.log(prefixString(test2));
console.log(prefixString(test3));

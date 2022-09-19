/**
 * Permutations
 *
 * @param {array} inputArray
 * @returns {array}
 *
 */

function permutations(inputArray) {
  let arrayPermute = [];

  const permute = (array, permuted = []) => {
    if (!array.length) {
      arrayPermute.push(permuted);
      return;
    }

    for (let i in array) {
      let current = array.slice();
      let next = current.splice(i, 1);
      permute(current, permuted.concat(next));
    }
  };

  permute(inputArray);

  return arrayPermute;
}

const test1 = ['h', 'l', 'a', 'o'];

console.log(permutations(test1));

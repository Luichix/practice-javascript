/**
 * Minimun Swaps
 * Sort array with minimun changes positions
 *
 * @param {Array} array
 * @return {Number}
 *
 * Select index with bad position
 * Search the value corresponding at current position
 * Change positions each other
 * Repeat
 *
 */

function minimumSwaps(array) {
  let swaps = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== i + 1) {
      let index = i;

      while (array[index] !== i + 1) {
        index++;
      }
      array[index] = array[i];
      array[i] = i + 1;
      swaps++;
    }
  }
  return swaps;
}

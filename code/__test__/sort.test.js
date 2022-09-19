import { minimumSwaps } from '../functions/sorting';

const array1 = [5, 3, 2, 1, 4, 0];
const array2 = [0, 7, 8, 6, 3, 2, 1, 5, 4];
const array3 = [9, 5, 3, 4, 7, 0, 2, 1, 6, 8];
const array4 = [6, 3, 9, 2, 8, 1, 0, 7, 5, 4];

describe('Sorting with minimun swaps', () => {
  it('Sorting test 1 to result 3', () => {
    expect(minimumSwaps(array1)).toBe(3);
  });
  it('Sorting test 2 to result 7', () => {
    expect(minimumSwaps(array2)).toBe(7);
  });
  it('Sorting test 3 to result 6', () => {
    expect(minimumSwaps(array3)).toBe(6);
  });
  it('Sorting test 4 to result 8', () => {
    expect(minimumSwaps(array4)).toBe(8);
  });
});

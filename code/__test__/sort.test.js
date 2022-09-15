import bubleSort from '../script/bubleSort';

describe('Test Sort Functions', () => {
  it('Buble Sort', () => {
    let result = bubleSort([5, 6, 4, 3, 2, 1]);

    expect(result).toBe([1, 2, 3, 4, 5, 6]);
  });
});

function countingValleys(steps, path) {
  // Write your code here
  let cont = 0;
  let acc = 0;
  let valley = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] === 'D') {
      cont += -1;
      acc = -1;
    } else {
      cont++;
      acc = 1;
    }
    if (acc === 1 && cont === 0) {
      valley++;
    }
  }

  return valley;
}

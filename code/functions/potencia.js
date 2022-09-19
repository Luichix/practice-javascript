export function obtenerConjuntoPotencia(inputArray) {
  if (!Array.isArray(inputArray)) {
    throw TypeError('The argument is not array');
  }

  return inputArray.reduce(
    (previous, current) =>
      previous.concat(previous.map((value) => [current].concat(value))),
    [[]]
  );
}

console.log(obtenerConjuntoPotencia(['a', 'b', 'c', 'd', 'e']));

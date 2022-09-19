function factorial(n) {
  let result = n;

  while (--n) {
    result *= n;
  }

  return result;
}

console.log(factorial(5));

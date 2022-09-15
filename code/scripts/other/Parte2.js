// Funcion normal

function suma(num1, num2) {
  let res = num1 + num2;
  document.write(res);
  document.write("<br>");
  return res;
}

// Funcion en constante

const resta = function (num1, num2) {
  let res = num1 - num2;
  document.write(res);
  document.write("<br>");
  return res;
};

// Funcion Flecha
const mult = (num1, num2) => document.write(num1 * num2);

suma(1, 2);
resta(8, 5);
mult(5, 3);

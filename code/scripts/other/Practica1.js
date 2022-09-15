let numero = -4;
let palabra = "Hola Mundo";
let respuesta = false;

console.log(numero);
console.log(palabra);
console.log(respuesta);

const PI = 3.14;

console.log(PI);

numero = 54;
palabra = "Adios";
console.log(numero);
console.log(palabra);

// CONDICIONALES SIMPLES

let num = -5;

if (num > 0) console.log(`${num} es mayor que 0`);

if (num < 10) {
  console.log(`${num} es menor que 10`);
}

// CONDICIONALES COMPUESTOS

if (num > 0) {
  console.log(`${num} es mayor que 0`);
} else {
  console.log(`${num} es menor que 0`);
}

// CONDICIONALES MULTIPLES

if (num > 0) {
  console.log(`${num} es mayor que 0`);
} else if (num < 0) {
  console.log(`${num} es menor que 0`);
} else {
  console.log(`${num} es igual a 0`);
}

// OPERADORES LOGICOS

let num1 = 1;
let num2 = 5;

if (num1 > 0 || num2 > 0) {
  console.log(`${num1} o ${num2} son mayores que 0`);
}

if (num1 > 0) {
  if (num2 > 0) console.log(`${num1} y ${num2} son mayores que 0`);
}

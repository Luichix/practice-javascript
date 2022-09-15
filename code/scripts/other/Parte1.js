//Arrays

let frutas = ["banana", "manzana", "perra"];

document.write(frutas[0] + "<br>");

//Arrays Asociados

let diccionario = {
  nombre: "Luis Reynaldo",
  Apellido: "Perez Chavez",
};

document.write(diccionario.nombre + "<br>");

// Condicionales

let num1 = 0;
let num2 = 6;

if (num1 == num2) {
  document.write("Los numeros son iguales");
} else {
  document.write("No funciono <br>");
}

// Bucles While

while (num1 < 5) {
  num1++;
  document.write(num1 + "<br>");
}
// Do While

do {
  document.write(num2 + "<br>");
  num2++;
} while (num2 < 10);

// Break

while (9 < num1 < 15) {
  num1++;
  document.write(num1 + "<br>");
  if (num1 == 12) {
    break;
  }
}

// For 1- Declaracion e inicializacion 2- Condicion 3- Aumento o Decremento

for (let i = 0; i < 7; i++) {
  if (i == 3) {
    continue;
  } else if (i == 6) {
    break;
  }
  document.write("For = " + i + "<br>");
}

// For in (Devuelve Indice)

let elementos = ["a", "b", "c"];

for (elemento in elementos) {
  document.write(elemento + "<br>");
}

// For of (Devuelve Valor)

for (elemento of elementos) {
  document.write(elemento + "<br>");
}

// Label

forNombre: for (let i in elementos) {
  if (i == 1) {
    for (b of elementos) {
      document.write(b + "<br>");
      if (b == "b") {
        break forNombre;
      }
    }
  } else {
    document.write(i + "<br>");
  }
}
